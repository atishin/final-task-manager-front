import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from 'app/const';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TMOdataService } from 'app/odata/TMOdataService';
import { IProject } from 'app/odata/types';

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {

    project: IProject;

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute, private odata: TMOdataService) {
        this.activatedRoute.params.subscribe(params => {
            if ('id' in params) {
                this.loadProject(Number.parseInt(params['id']));
            }
        });
    }

    private loadProject(id: number) {
        this.odata.getContext().subscribe(context => {
            context.OProjects.Expand(p => p.Tasks, p => p.ProjectChat.Messages).Single(id).subscribe(project => this.project = project);
        });
    }

    createChat() {
        this.odata.getContext().subscribe(context => {
            context.OProjectChats.Add({
                Id: this.project.Id
            }).subscribe(chat => console.log(chat));
        })
    }

    ngOnInit() {
    }

}

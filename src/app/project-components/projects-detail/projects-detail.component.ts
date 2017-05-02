import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from 'app/const';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IProject } from 'app/project-components/models';

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {

    project: IProject;

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            if ('id' in params) {
                this.loadProject(Number.parseInt(params['id']));
            }
        })
    }

    private loadProject(id: number) {
        this.http.get(`${API_URL}/api/Projects/${id}`).subscribe(r => this.project = r.json());
    }

    ngOnInit() {
    }

}

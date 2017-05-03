import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from 'app/const';
import { TMOdataService } from 'app/odata/TMOdataService';
import { IProject } from 'app/odata/types';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

    projects: IProject[] = [];

    constructor(private odata: TMOdataService) {
        odata.getContext().subscribe(context => {
            context.OProjects
                .Expand(p => p.Manager)
                .Select(p => p.ALL_PROP, p => p.Manager.UserName)
                .Get()
                .subscribe(wrapper => this.projects = wrapper.value);
        })
    }

    ngOnInit() {
    }

}

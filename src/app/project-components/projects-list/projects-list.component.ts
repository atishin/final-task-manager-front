import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IProject } from 'app/project-components/models';
import { API_URL } from 'app/const';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

    projects: IProject[] = [];

    constructor(private http: Http) { 
        this.http.get(`${API_URL}/api/Projects`).map(r => r.json()).subscribe(projects => this.projects = projects);
    }

    ngOnInit() {
    }

}

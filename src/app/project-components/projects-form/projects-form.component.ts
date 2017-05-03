import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from 'app/const';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TMOdataService } from 'app/odata/TMOdataService';
import * as _ from 'lodash';
import { IProject } from 'app/odata/types';
import { AuthService } from 'app/auth-components/auth.service';

@Component({
    selector: 'app-projects-form',
    templateUrl: './projects-form.component.html',
    styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {

    form = new FormGroup({
        'Title': new FormControl('', Validators.required),
        'Description': new FormControl('', Validators.required),
    })

    constructor(private http: Http, private router: Router, private odata: TMOdataService, private auth: AuthService) { }

    ngOnInit() {
    }

    submit() {
        this.odata.getContext().subscribe(context => {
            const model: IProject = _(this.form.value).cloneDeep();
            _(model).extendWith(<IProject>{
                ManagerId: this.auth.userId
            }).commit();
            context.OProjects.Add(model).subscribe(() => {
                this.router.navigate(['/projects']);
            });
        });
    }

}

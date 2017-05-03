import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { TMOdataService } from 'app/odata/TMOdataService';
import { AuthService } from 'app/auth-components/auth.service';
import { IProjectTask, ITaskStatus } from 'app/odata/types';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
    selector: 'app-tasks-form',
    templateUrl: './tasks-form.component.html',
    styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

    form = new FormGroup({
        'Title': new FormControl('', Validators.required),
        'Description': new FormControl('', Validators.required),
        'TaskStatusId': new FormControl(null, Validators.required)
    });
    private projectId: number = undefined;
    taskStatuses: ITaskStatus[] = [];

    constructor(
        private http: Http,
        private router: Router,
        private odata: TMOdataService,
        private auth: AuthService,
        private activatedRoute: ActivatedRoute
    ) {
        activatedRoute.params.subscribe(params => {
            if ('id' in params) {
                this.projectId = Number.parseInt(params['id']);
            }
        });
        odata.getContext().subscribe(context => {
            context.OTaskStatus.Get().subscribe(wrapper => {
                this.taskStatuses = wrapper.value;
            })
        })
    }

    ngOnInit() {
    }

    submit() {
        this.odata.getContext().subscribe(context => {
            const model: IProjectTask = _(this.form.value).cloneDeep();
            _(model).extendWith(<IProjectTask>{
                ProjectId: this.projectId,
                StartDate: moment().format('YYYY-MM-DD[T]HH:mm:ss[Z]')
            }).commit();
            context.OProjectTasks.Add(model).subscribe(() => {
                this.router.navigate(['/projects', 'show', this.projectId]);
            });
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from 'app/const';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

    constructor(private http: Http, private router: Router) { }

    ngOnInit() {
    }

    submit() {
        this.http.post(`${API_URL}/api/Projects`, this.form.value).subscribe(() => {
            this.router.navigate(['/projects']);
        })
    }

}

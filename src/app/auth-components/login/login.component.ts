import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/auth-components/auth.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form = new FormGroup({
        'userName': new FormControl('', [Validators.email, Validators.required]),
        'password': new FormControl('', [Validators.required])
    });
    // tslint:disable-next-line:no-output-rename
    @Output('signed-in') onSingedIn = new EventEmitter();
    isAuthenticated = this.authService.isAuthenticated;
    userName = this.authService.userName;

    constructor(private authService: AuthService, private snackbar: MdSnackBar) {
        this.authService.onAuthenticationChange.subscribe(() => {
            this.isAuthenticated = this.authService.isAuthenticated;
            this.userName = this.authService.userName;
        });
    }

    ngOnInit() { }

    signIn() {
        if (this.form.valid) {
            this.authService.signIn(this.form.value).subscribe(() => {
                this.onSingedIn.emit();
            }, (err) => {
                this.snackbar.open('Wrong e-mail or password', null, {
                    duration: 3000
                });
            });
        } else {
            this.snackbar.open('Inputed data is incorrect', null, {
                duration: 3000
            });
        }
    }

    signOut() {
        this.authService.signOut();
    }

}

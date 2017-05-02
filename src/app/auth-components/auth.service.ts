import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ISignUpModel, ISignInModel } from 'app/auth-components/models';
import { API_URL } from 'app/const'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private _isAuthenticated: boolean = null;
    private _token: string = null;
    private _userName: string = null;
    private _userId: string = null;
    private authenticationSubject = new Subject<boolean>();
    onAuthenticationChange = this.authenticationSubject.asObservable();

    constructor(private http: Http) { }

    get isAuthenticated() {
        if (this._isAuthenticated == null) {
            this._isAuthenticated = this.token != null && this.token !== undefined;
        }
        return this._isAuthenticated;
    }
    get token() {
        if (!this._token) {
            this._token = localStorage.getItem('token');
        }
        return this._token;
    }
    set token(token: string) {
        this._token = token;
        if (token == null) {
            localStorage.removeItem('token');
            this._isAuthenticated = false;
        } else {
            localStorage.setItem('token', token);
            this._isAuthenticated = true;
        }
        this.authenticationSubject.next(this.isAuthenticated);
    }

    get userName() {
        if (!this._userName) {
            this._userName = localStorage.getItem('userName');
        }
        return this._userName;
    }
    set userName(userName: string) {
        this._userName = userName;
        if (userName == null) {
            localStorage.removeItem('userName');
        } else {
            localStorage.setItem('userName', userName);
        }
    }
    get userId() {
        if (!this._userId) {
            this._userId = localStorage.getItem('userId');
        }
        return this._userId;
    }
    set userId(userId: string) {
        this._userId = userId;
        if (userId == null) {
            localStorage.removeItem('userId');
        } else {
            localStorage.setItem('userId', userId);
        }
    }

    public signIn(model: ISignInModel) {
        const params = new URLSearchParams();
        params.append('userName', model.userName);
        params.append('password', model.password);
        params.append('grant_type', 'password');
        const request = this.http.post(`${API_URL}/Token`, params).map(r => r.json());
        request.subscribe(data => {
            if ('userName' in data) {
                this.userName = data['userName'];
            }
            if ('userId' in data) {
                this.userId = data['userId'];
            }
            if ('access_token' in data) {
                this.token = data['access_token'];
            }
        });
        return request;
    }

    public signOut() {
        this.userName = null;
        this.userId = null;
        this.token = null;
    }

    public signUp(model: ISignUpModel) {

    }
}

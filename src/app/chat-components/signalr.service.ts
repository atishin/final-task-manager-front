import { Injectable } from '@angular/core';
import 'jquery';
import 'signalr';
import { API_URL } from 'app/const';


@Injectable()
export class SignalrService {

    private isStarted = false;

    private hubConnection: SignalR.Hub.Connection;
    private hubProxy: SignalR.Hub.Proxy;

    constructor() {}


    public start(callback: (...params) => any, ...params: any[]) {
        if (this.isStarted) {
            callback(...params);
        } else {
            this.hubConnection = $.hubConnection(`${API_URL}/signalr`);
            this.hubProxy = this.hubConnection.createHubProxy('chatHub');
            this.hubProxy.on('NewMessage', (message) => {
                console.log('NewMessage', message);
            });
            this.hubProxy.on('newMessage', (message) => {
                console.log('newMessage', message);
            });
            this.hubConnection.start().done(() => {
                callback(...params);
                this.isStarted = true;
            });
        }

    }

}

import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from "app/odata/types";
import { TMOdataService } from "app/odata/TMOdataService";
import * as moment from 'moment';
import { AuthService } from "app/auth-components/auth.service";
import { SignalrService } from "app/chat-components/signalr.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    messages: IMessage[];
    message: string;
    private _projectId: number;
    @Input('project-id') set projectId(projectId: number) {
        console.log('here', projectId);
        this._projectId = projectId;
        this.loadMessages();
    }

    constructor(private odata: TMOdataService, private authService: AuthService, private signalr: SignalrService) { 
        signalr.start(() => {
            console.log('started');
        });
    }

    ngOnInit() {
    }

    private loadMessages() {
        if (!this._projectId) {
            return;
        }
        this.odata.getContext().subscribe(context => {
            context.OMessages.FilterCommand(cmd => cmd.BeginQuery(
                messages => messages.Where(m => m.ProjectChatId).Equal(this._projectId).Finish()
            )).Expand(m => m.User).Select(m => m.ALL_PROP, m => m.User.UserName).Get().subscribe(wrapper => this.messages = wrapper.value);
        })
    }

    send() {
        console.log(this._projectId, this.message);
        if (!this._projectId || !this.message) {
            return;
        }
        this.odata.getContext().subscribe(context => {
            context.OMessages.Add({
                MessageTime: moment().format('YYYY-MM-DD[T]HH:mm:ss[Z]'),
                ProjectChatId: this._projectId,
                Text: this.message,
                UserId: this.authService.userId
            }).subscribe(message => {
                message.User = {
                    UserName: this.authService.userName
                } as any;
                this.messages.push(message)
                this.message = '';
            });
        })
    }

}

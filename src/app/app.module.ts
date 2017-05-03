import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'app/material/material.module';
import { LoginComponent } from './auth-components/login/login.component';
import { AuthService } from 'app/auth-components/auth.service';
import { ProjectsListComponent } from './project-components/projects-list/projects-list.component';
import { ProjectsPageComponent } from './project-components/projects-page/projects-page.component';
import { ProjectsFormComponent } from './project-components/projects-form/projects-form.component';
import { ProjectsDetailComponent } from './project-components/projects-detail/projects-detail.component';
import { TMOdataService } from 'app/odata/TMOdataService';
import { TasksFormComponent } from './task-components/tasks-form/tasks-form.component';
import { ChatComponent } from './chat-components/chat/chat.component';
import { SignalrService } from "app/chat-components/signalr.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectsListComponent,
    ProjectsPageComponent,
    ProjectsFormComponent,
    ProjectsDetailComponent,
    TasksFormComponent,
    ChatComponent
  ],
  entryComponents: [
      LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
      AuthService,
      TMOdataService,
      SignalrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

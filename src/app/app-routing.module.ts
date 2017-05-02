import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsPageComponent } from 'app/project-components/projects-page/projects-page.component';
import { ProjectsFormComponent } from 'app/project-components/projects-form/projects-form.component';
import { ProjectsDetailComponent } from 'app/project-components/projects-detail/projects-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectsPageComponent
    },
    {
        path: 'projects',
        children: [
            {
                path: '',
                component: ProjectsPageComponent
            },
            {
                path: 'add',
                component: ProjectsFormComponent
            },
            {
                path: 'show/:id',
                component: ProjectsDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

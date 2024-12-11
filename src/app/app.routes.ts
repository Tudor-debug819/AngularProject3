import { Routes } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { FormComponent } from "./form/form.component";

export const routes: Routes = [
    {
        path:'',
        component: ProjectsComponent
    },
    {
        path:'contact',
        component: FormComponent
    }
];

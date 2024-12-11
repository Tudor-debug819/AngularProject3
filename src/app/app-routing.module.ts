import { NgModule } from "@angular/core";
import{Routes, RouterModule} from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
    {
        path:'',
        component: ProjectsComponent
    },
    {
        path:'contact',
        component: FormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
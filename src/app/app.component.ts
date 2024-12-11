import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProjectsComponent, FooterComponent, FormComponent ,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject3';
}

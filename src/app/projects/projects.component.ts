import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgFor]
})
export class ProjectsComponent {
  cards = [
    {
      title: 'Project 1',
      description: 'Description for project 1.',
      image: 'assets/project1.png',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for project 2.',
      image: 'assets/project2.png',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description for project 3.',
      image: 'assets/project3.png',
      link: 'https://example.com/project3',
    }
  ];
}

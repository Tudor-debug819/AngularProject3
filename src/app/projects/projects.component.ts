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
      "title": "Comming Soon",
      "description": "I made a coming soon page for my main website which is responsive using media queries.",
      "image": "assets/coming-soon-photo.png",
      "technologies": ["html", "css"],
      "githubLink": "https://github.com/Tudor-debug819/comingsoon",
      "liveLink": "https://tudor-debug819.github.io/comingsoon/"
    },
    {
      "title": "Back to Top",
      "description": "A back to top page with a sticky arrow button that returns the user back to the top.",
      "image": "assets/back-to-top-photo.png",
      "technologies": ["html", "css"],
      "githubLink": "https://github.com/Tudor-debug819/backtotop",
      "liveLink": "https://tudor-debug819.github.io/backtotop/"
    },
    {
      "title": "Site layout",
      "description": "Two web pages created with grid and flexbox layouts to improve understanding.",
      "image": "assets/site-layout-photo.png",
      "technologies": ["html", "css"],
      "githubLink": "https://github.com/Tudor-debug819/siteLayout",
      "liveLink": "https://github.com/Tudor-debug819/siteLayout/"
    },
    {
      "title": "Currency Exchange",
      "description": "Currency exchange app to quickly calculate money conversion.",
      "image": "assets/currency.png",
      "technologies": ["html", "css", "javascript"],
      "githubLink": "https://github.com/Tudor-debug819/convertor-valutar",
      "liveLink": "https://tudor-debug819.github.io/convertor-valutar/"
    },
    {
      "title": "Random Name Generator",
      "description": "Helps you decide who is going to pay a bill at a restaurant by generating a random name.",
      "image": "assets/random-name.png",
      "technologies": ["html", "css", "javascript"],
      "githubLink": "https://github.com/Tudor-debug819/random-generator",
      "liveLink": "https://tudor-debug819.github.io/random-generator/"
    },
    {
      "title": "Tip Calculator",
      "description": "Calculates how much tip you should give based on the meal price.",
      "image": "assets/bacsis.png",
      "technologies": ["html", "css", "javascript"],
      "githubLink": "https://github.com/Tudor-debug819/bacsis",
      "liveLink": "https://tudor-debug819.github.io/bacsis/"
    },
    {
      "title": "Multilevel Menu",
      "description": "Multilevel menu that transforms into a hamburger menu on smaller screens.",
      "image": "assets/multilevelmenu.png",
      "technologies": ["html", "css", "javascript"],
      "githubLink": "https://github.com/Tudor-debug819/multilevel-menu",
      "liveLink": "https://tudor-debug819.github.io/multilevel-menu/"
    },
  ];
}

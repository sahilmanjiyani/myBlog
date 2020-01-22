import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  projectList = [
    {
      projectTitle: "MillenniumLED",
      source: "http://millenniumled.com/",
      imgPath: "../../assets/images/Projects/millenniumled.png",
    },
    {
      projectTitle: "My Music App",
      source: "https://github.com/sahilmanjiyani/Angular-Material-Apple-api",
      imgPath: "../../assets/images/Projects/my-music-app.png",
    }
  ];
}

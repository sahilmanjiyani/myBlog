import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  skillsProgress = [
    {
      title: "Angular 8",
      value: "95"
    },
    {
      title: "React",
      value: "90"
    },
    {
      title: "NodeJs",
      value: "90"
    },
    {
      title: "JavaScript",
      value: "90"
    },
    {
      title: "Python",
      value: "80"
    }
  ];

  experience = [
    {
      title: "Beacontree Technologies Inc",
      position: "Software Developer",
      period: {
        from: "Sept 2019",
        to: "Dec 2019"
      },
      content: `Developing cross-platform mobile and desktop application on React Native 
                framework with the team of 
                two developers.`
    },
    {
      title: "Pigtail Pundits",
      position: "Software Developer",
      period: {
        from: "June 2016",
        to: "Feb 2018"
      },
      content: `Developing cross-platform mobile and desktop application on React Native 
                framework with the team of 
                two developers.`
    },
  ]

  techLogos = [
    {
      title: "Angular",
      source: "../../assets/tech-logos/angular.png"
    },
    {
      title: "NodeJs",
      source: "../../assets/tech-logos/nodejs-logo.png"
    },
    {
      title: "JavaScript",
      source: "../../assets/tech-logos/JavaScript_logo_2.svg.png"
    },
    {
      title: "Python",
      source: "../../assets/tech-logos/python-logo.png"
    },
    {
      title: "MySQL",
      source: "../../assets/tech-logos/mysql-logo.jpg"
    },
    {
      title: "SASS",
      source: "../../assets/tech-logos/sass-logo.png"
    },
    {
      title: "AWS",
      source: "../../assets/tech-logos/aws-logo.png"
    },
    {
      title: "React",
      source: "../../assets/tech-logos/react-logo.png"
    },
    {
      title: "React Native",
      source: "../../assets/tech-logos/reactnative-logo.png"
    }
  ]
  // faCoffee = faCoffee;
}

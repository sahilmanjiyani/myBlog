import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  
    myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': '0px',
            'left': '0px',
            'right': '0px',
            'bottom': '0px',
        };

	this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#000000'
                },
                shape: {
                    type: 'triangle',
                },
	    }
  };
  }
}

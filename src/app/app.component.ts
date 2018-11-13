import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ben Wilson';
  subtitle = "Software Developer";
  typedSubtitle = "";
  typeIndex = 0;

  ngOnInit() {
  	this.typeOutSubtitle();
  }

  typeOutSubtitle() {
  	console.log("starting...");
  	const interval = 100; // 10 chars/sec
  	var typeAnim = setInterval(() => {
  		if (this.typeIndex < this.subtitle.length)
  			this.typeIndex++;
  		else 
  			clearInterval(typeAnim);
  		this.typedSubtitle = this.subtitle.substring(0, this.typeIndex);
  	}, interval);
  }
}

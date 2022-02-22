import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training';
  
  myHero: Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  }
  
  anotherHero: Hero = {
    name: "SuperMan",
    address: "London",
    superpower: "flying"
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
/* 
  hero: Hero = {
    name: "John",
    address: "Győr",
    superpower: "forte"
  }
 */
  constructor() { }

  ngOnInit(): void {
  }

}

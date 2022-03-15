import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  superPowers: Array<string> = [
    "magnetic",
    "really smart",
    "rich",
    "hard",
    "biking"
  ];

  // @Input() hero?: Hero;
  /* 
    hero: Hero = {
      name: "John",
      address: "Győr",
      superpower: "forte"
    }
   */
  constructor(
    private ar: ActivatedRoute,
    private hService: HeroService
  ) {
    this.ar.params.subscribe(params => {
      this.hService.getOne(params['id']).forEach(hero => {
        this.hero = hero;
      });
    });
  }

  ngOnInit(): void {
  }

  onSubmit(hero: Hero): void {
     this.hService.update(hero).forEach(value => {
    console.log("Updated hero: ", value);
  });
  }

}

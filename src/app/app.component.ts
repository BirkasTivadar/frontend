import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training';

  myHero?: Hero;

  listObservable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService
  ) {
    this.listObservable = hService.getAll();
  }

  setHero(hero: Hero): void {
    this.myHero = hero;
  }

  /* 
  this.hService.getAll().forEach(value => {
    console.log("All hero: ", value)
  });
  
    this.hService.getOne(1).forEach(value => {
      console.log("First hero: ", value);
    });
    
    this.hService.add({ id: 10, name: "Jack", address: "Bp", superpower: "biking" })
    .forEach(value => {
      console.log("New hero: ", value);
    });
    
    this.hService.update({ id: 1, name: "Lucy", address: "Győr", superpower: "singing" }).forEach(value => {
      console.log("Updated hero: ", value);
    });
    
    this.hService.remove(2).forEach(value => {
      console.log("Deleted hero: ", value);
    });
    */


  /* 
      myHero: Hero = {
        name: "Magneto",
        address: "New York",
        superpower: "magnetic"
      };
  
      listObservable: Observable<any>;
  
      constructor(
        private fService: FootballService,
        private hService: HeroService
      ) {
        this.listObservable = new Observable(observer => {
          let to = setTimeout(() => {
            observer.next("Megjöttem...");
          }, 15000);
  
          let to2 = setTimeout(() => {
            observer.complete();
          }, 20000);
        });
  
        this.listObservable.subscribe(
          value => console.log(value),
          error => console.error(error),
          () => console.log("complete")
        );
   */


  /*   
    anotherHero: Hero = {
      name: "SuperMan",
      address: "London",
      superpower: "flying"
    }
   */
}

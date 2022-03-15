import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  jsonUrl: string = "http://localhost:3000/heroes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.jsonUrl);
  }

  getOne(id: string | number): Observable<Hero> {
    return this.http.get<Hero>(`${this.jsonUrl}/${id}`);
  }

  add(hero: Hero): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!hero.id) {
        this.getAll().forEach(heroes => {
          let id = heroes[heroes.length - 1].id;
          this.http.post<Observable<any>>(this.jsonUrl, hero)
            .forEach(res => {
              resolve('');
            });
        });
      } else {
        this.http.post<Observable<any>>(this.jsonUrl, hero)
          .forEach(res => {
            resolve('');
          });
      }
    });
  }

  update(hero: Hero): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${hero.id}`, hero)
  }

  remove(hero: any): Observable<any> {
    hero = hero.id ? hero.id : hero;
    return this.http.delete(`${this.jsonUrl}/${hero}`);
  }
}

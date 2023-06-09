import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evnvironment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeroes() :Observable<SuperHero[]>   {
    return this.http.get<SuperHero[]>(`${evnvironment.apiUrl}/${this.url}`) ;
  }

  public updateHero(hero: SuperHero) :Observable<SuperHero[]>   {
    return this.http.put<SuperHero[]>(`${evnvironment.apiUrl}/${this.url}`, hero) ;
  }

  public addHero(hero: SuperHero) :Observable<SuperHero[]>   {
    return this.http.post<SuperHero[]>(`${evnvironment.apiUrl}/${this.url}`, hero) ;
  }

  public deleteHero(hero: SuperHero) :Observable<SuperHero[]>   {
    return this.http.delete<SuperHero[]>(`${evnvironment.apiUrl}/${this.url}/${hero.id}`) ;
  }
}
 
import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero

  constructor(private superHeroService: SuperHeroService){}

  updatedHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  ngOnInit() : void {
    this.superHeroService.getSuperHeroes().subscribe((result: SuperHero[]) =>(this.heroes = result));
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero){
    this.heroToEdit = hero;
  }

}
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero?: Hero;
  constructor(private heroService: HeroService) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  public selectHero(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
}

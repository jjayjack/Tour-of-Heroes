import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private readonly heroService: HeroService // private readonly messageService: MessageService
  ) {}

  public ngOnInit(): void {
    // this.loadHeroes();
    this.getHeroes();
  }
  // public loadHeroes(): void {
  //   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  // }
  // public onSelect(hero: Hero): void {
  //   if (hero === this.selectedHero) {
  //     this.selectedHero = undefined;
  //     this.messageService.add(`Unselecting hero with${hero.id}`);
  //   } else {
  //     this.selectedHero = hero;
  //     this.messageService.add(`Showing hero with ID ${hero.id}`);
  //   }
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

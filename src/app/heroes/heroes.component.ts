import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // selectedHero: Hero;

  // heroes = HEROES;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private http: HttpClient
  ) {
  }

  // 为啥这边不能写？
  // private heroesUrl = 'api/heroes';


  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(
      hero => {
        this.heroes.push(hero);
      }
    );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

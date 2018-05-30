import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    // TODO:send the message _after_ fetching the heroes
    this.messageService.add('HeroService:fetched heroes');

    // of参数来模拟从服务器返回的数据，它返回一个Observable<Hero[]>
    return of(HEROES);
  }
}

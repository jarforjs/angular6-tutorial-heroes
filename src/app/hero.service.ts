import {Injectable} from '@angular/core';
import {Hero} from './hero';
// import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    // TODO:send the message _after_ fetching the heroes
    // this.messageService.add('HeroService:fetched heroes');

    // of参数来模拟从服务器返回的数据，它返回一个Observable<Hero[]>
    // return of(HEROES);
    // 加入http后改成下面方法
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
    // Http 方法返回单个值:
    // 所有的 HttpClient 方法都会返回某个值的 RxJS Observable。
    // HTTP 是一个请求/响应式协议。你发起请求，它返回单个的响应。
    // 通常，Observable 可以在一段时间内返回多个值。 但来自 HttpClient 的 Observable 总是发出一个值，然后结束，再也不会发出其它值。
    // 具体到这次 HttpClient.get 调用，它返回一个 Observable<Hero[]>，顾名思义就是“一个英雄数组的可观察对象”。在实践中，它也只会返回一个英雄数组。
  }

  /** GET hero by id. Return `undefined` when id not found */
  /* GET heroes whose name contains search term */

  // 这里与上面的getHeroes的区别，上面返回的是一个数组[],而这里返回的只是一个Observable<Hero>
  getHero(id: number): Observable<Hero> {
    // TODO:send the message _after_ fetching the hero
    // this.messageService.add(`HeroService:fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));

    // 加入http后改成下面方法
    // 使用id构建一个请求url
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains serach term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term,return empty hero array
      return of([]);
    }

    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * let the app continue
   * @param {string} operation - name of the operation that failed
   * @param {T} result - optional value to return as the observable result
   * @returns {(error: any) => Observable<T>}
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // log to console instead
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed:${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService:' + message);
  }
}

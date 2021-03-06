import { throwError as observableThrowError, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Game } from '../../shared/models/game.model';
import { AppConfig } from '../../app.config';
import { Event } from '../../shared/models/event.model';
import { GamePlayer } from '../../shared/models/game-player.model';
import { Article } from '../../shared/models/article.model';
import { Competition } from '../../shared/models/competition.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class GamesService {
  private gameUrl = AppConfig.settings.apiServer.url + '/games';
  private competitionsUrl =
    AppConfig.settings.apiServer.url + '/games/competitions';
  private nextGameUrl = AppConfig.settings.apiServer.url + '/nextgame';
  private lastGameUrl = AppConfig.settings.apiServer.url + '/previousgame';

  constructor(private http: HttpClient) {}

  public getGame(id: string): Observable<Game> {
    return this.http.get<Game>(this.gameUrl + '/' + id);
  }

  public getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.competitionsUrl);
  }

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameUrl);
  }

  public getNextGame(): Observable<Game> {
    return this.http.get<Game>(this.nextGameUrl);
  }

  public getLastGame(): Observable<Game> {
    return this.http.get<Game>(this.lastGameUrl);
  }

  public createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gameUrl, game, httpOptions);
  }

  public updateGame(game: Game): Observable<Game> {
    const url = this.gameUrl + '/' + game.Id;
    return this.http.put<Game>(url, game, httpOptions);
  }

  public deleteGame(id: string) {
    console.log('Delete Game ' + id);
    return this.http.delete(this.gameUrl + '/' + id);
  }

  public getGamePlayers(gameId: string): Observable<GamePlayer[]> {
    return this.http.get<GamePlayer[]>(
      this.gameUrl + '/' + gameId + '/players'
    );
  }

  public getGameArticle(gameId: string): Observable<Article> {
    return this.http.get<Article>(this.gameUrl + '/' + gameId + '/articles');
  }

  public getGameEvents(gameId: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.gameUrl + '/' + gameId + '/events');
  }

  public getNextGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameUrl + '/lgef');
  }

  public addGamePlayer(
    gameId: string,
    player: GamePlayer
  ): Observable<GamePlayer> {
    return this.http.post<GamePlayer>(
      this.gameUrl + '/' + gameId + '/players',
      player
    );
  }

  public deleteGamePlayer(gameId: string, playerId: string) {
    return this.http.delete(
      this.gameUrl + '/' + gameId + '/players/' + playerId
    );
  }

  // private handleError(error: HttpErrorResponse) {
  //     if (error.error instanceof ErrorEvent) {
  //         // A client-side or network error occurred. Handle it accordingly.
  //         console.error('An error occurred:', error.error.message);
  //     } else {
  //         // The backend returned an unsuccessful response code.
  //         // The response body may contain clues as to what went wrong,
  //         console.error(
  //             `Backend returned code ${error.status}, ` +
  //             `body was: ${error.error}`);
  //     }
  //     // return an observable with a user-facing error message
  //     return throwError(
  //         'Something bad happened; please try again later.');
  // };
}

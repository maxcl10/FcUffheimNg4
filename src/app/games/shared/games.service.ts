
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Game } from './game.model';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class GamesService {

    private gameUrl = 'https://fcuwebapi.azurewebsites.net/api/games';
    private nextGameUrl = 'https://fcuwebapi.azurewebsites.net/api/nextgame';
    private lastGameUrl = 'https://fcuwebapi.azurewebsites.net/api/previousgame';



    constructor(private http: HttpClient) {

    }

    public getGame(id: string): Observable<Game> {
        return this.http.get<Game>(this.gameUrl + '/' + id);
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

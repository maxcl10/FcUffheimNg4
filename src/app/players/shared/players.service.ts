
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Player } from './player.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class PlayersService {
    private playerUrl = 'https://fcuwebapi.azurewebsites.net/api/players';

    constructor(private http: HttpClient) {
    }

    public getplayer(id: string): Observable<Player> {
        return this.http.get<Player>(this.playerUrl + '/' + id);
    }

    public getplayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.playerUrl)
    }

    public createplayer(player: Player): Observable<Player> {
        return this.http.post<Player>(this.playerUrl, player, httpOptions);
    }

    public updateplayer(player: Player): Observable<Player> {
        return this.http.put<Player>(this.playerUrl + '/' + player.id, player, httpOptions);
    }

    public deleteplayer(id: string) {
        return this.http.delete(this.playerUrl + '/' + id);
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return observableThrowError(errMsg);
    }
}

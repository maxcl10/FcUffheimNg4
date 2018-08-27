
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Team } from './team.model';
import { Player } from '../../players/shared/player.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class TeamsService {
    private teamsUrl = 'https://fcuwebapi.azurewebsites.net/api/teams';
    private teamPlayersUrl = 'https://fcuwebapi.azurewebsites.net/api/ns/teamplayer';

    constructor(private http: HttpClient) {
    }

    public getPlayers(teamId: string): Observable<Player[]> {
        return this.http.get<Player[]>(this.teamPlayersUrl + '/getplayers/' + teamId);
    }

    public getCurrentPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.teamPlayersUrl + '/getcurrentplayers/');
    }

    public getHomeTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(this.teamPlayersUrl + '/getHomeTeams');
    }

    public getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(this.teamsUrl);
    }

    public createTeam(team: Team): Observable<Team> {
        return this.http.post<Team>(this.teamsUrl, team, httpOptions);
    }

    public addPlayerInTeam(playerId: string, teamId: string) {
        return this.http.post(
          this.teamPlayersUrl + '/addPlayer/', '{playerId: ' + JSON.stringify(playerId)
          + ', teamId: ' + JSON.stringify(teamId) + '}', httpOptions);
    }

    public removePlayerFromTeam(playerId: string, teamId: string) {
        return this.http.post(
          this.teamPlayersUrl + '/removePlayer/', '{playerId: ' + JSON.stringify(playerId)
          + ', teamId: ' + JSON.stringify(teamId) + '}', httpOptions);
    }
    // updateplayer(player: Player): Observable<Player> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.put(this.playerUrl + '/' + player.id, JSON.stringify(player), { headers: headers })
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    // deleteplayer(id: string) {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.delete(this.playerUrl + '/' + id, { headers: headers })
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return observableThrowError(errMsg);
    }
}

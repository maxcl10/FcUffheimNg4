
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RankingHistory } from './rankingHistory.model';

@Injectable()
export class StatsService {

    private statsUrl = 'https://fcuwebapi.azurewebsites.net/api/ns/stats/';

    constructor(private http: HttpClient) {

    }

    public getShape(): Observable<string[]> {
        return this.http.get<string[]>(this.statsUrl + '/getShape');           
    }

    public getRankingHistory(): Observable<RankingHistory[]> {
        return this.http.get<RankingHistory[]>(this.statsUrl + '/getRankingHistory');
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return observableThrowError(errMsg);
    }
}

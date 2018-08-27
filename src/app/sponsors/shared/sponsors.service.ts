
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sponsor } from './sponsor.model';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class SponsorsService {

    private sponsorsUrl = 'https://fcuwebapi.azurewebsites.net/api/sponsors';

    constructor(private http: HttpClient) {

    }

    public getSponsors(): Observable<Sponsor[]> {
        return this.http.get<Sponsor[]>(this.sponsorsUrl);
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

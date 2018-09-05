import { throwError as observableThrowError, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sponsor } from './sponsor.model';
import { AppConfig } from '../../app.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class SponsorsService {
  private sponsorsUrl = AppConfig.settings.apiServer.url + '/sponsors';

  constructor(private http: HttpClient) {}

  public getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.sponsorsUrl);
  }

  public createSponsor(sponsor: Sponsor): Observable<Sponsor> {
    return this.http.post<Sponsor>(this.sponsorsUrl, sponsor, httpOptions);
  }
}

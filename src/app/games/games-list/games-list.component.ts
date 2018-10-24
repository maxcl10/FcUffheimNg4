import { Component, OnInit } from '@angular/core';

import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { LogoService } from '../../shared/services/logo.service';
import { SeoService } from '../../shared/services/seo.service';
import { TeamsService } from '../../teams/shared/teams.service';
import { AppConfig } from '../../app.config';

import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { Observable, from, merge, } from 'rxjs';
import { group } from '@angular/animations';

@Component({
  selector: 'fws-games-list',
  templateUrl: './games-list.component.html',
  providers: [GamesService, LogoService, TeamsService]
})
export class GamesComponent implements OnInit {
  public games: Game[];
  public errorMessage: string;
  public homeTeam: string;
  public gamesPerMonth: Game[][];

  constructor(
    private gamesService: GamesService,
    private teamsService: TeamsService,
    private logoService: LogoService,
    private seoService: SeoService
  ) {}

  public ngOnInit() {
    this.seoService.setTitle(
      AppConfig.settings.properties.siteName + ' - Calendrier'
    );
    this.getGames();

    this.teamsService.getHomeTeams().subscribe(
      homeTeams => {
        this.homeTeam = homeTeams[0].name;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public getGames() {
    this.gamesPerMonth = new Array();
    this.gamesService.getGames().subscribe(
      games => {
        games.forEach(element => {
          element.homeTeamLogoUrl = this.logoService.getLogoPath(
            element.HomeTeam,
            60
          );
          element.awayTeamLogoUrl = this.logoService.getLogoPath(
            element.AwayTeam,
            60
          );
        });
        this.games = games;

        const source = from(games);
        const example = source.pipe(
          groupBy(person => new Date(person.MatchDate).getMonth() + '-' + new Date(person.MatchDate).getFullYear() ),
          // return each item in group as array
          mergeMap(groupsd => groupsd.pipe(toArray()))
        );

        const subscribe = example.subscribe(val => {
          console.log(val);
          this.gamesPerMonth.push(val);
          console.log(this.gamesPerMonth.length);
          });
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public getWeb(game: Game) {
    return game.MatchDate.getMonth();
  }
}

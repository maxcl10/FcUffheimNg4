import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { LogoService } from '../../shared/services/logo.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../shared/services/seo.service';
import { TeamsService } from '../../teams/shared/teams.service';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'fws-games-list',
  templateUrl: './games-list.component.html',
  providers: [GamesService, LogoService, TeamsService]
})
export class GamesComponent implements OnInit {
  public games: Game[];
  public errorMessage: string;
  public homeTeam: string;

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
    this.gamesService.getGames().subscribe(
      games => {
        games.forEach(element => {
          element.homeTeamLogoUrl = this.logoService.getLogoPath(
            element.HomeTeam,
            30
          );
          element.awayTeamLogoUrl = this.logoService.getLogoPath(
            element.AwayTeam,
            30
          );
        });
        this.games = games;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public getWeb(game: Game) {
    return game.MatchDate.getMonth();
  }
}

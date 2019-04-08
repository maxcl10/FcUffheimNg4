import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../../../core/services/games.service';
import { Game } from '../../../shared/models/game.model';

import { LogoService } from '../../../core/services/logo.service';
import { TeamsService } from '../../../core/services/teams.service';

@Component({
  selector: 'fws-last-game',
  templateUrl: './last-game.component.html',
  providers: [GamesService, LogoService]
})
export class LastGameComponent implements OnInit {
  public game: Game;
  public errorMessage: string;
  public homeTeam: string;

  constructor(
    private gamesService: GamesService,
    private teamsService: TeamsService,
    private logoService: LogoService
  ) {}

  public ngOnInit() {
    this.teamsService.getHomeTeams().subscribe(
      homeTeams => {
        this.homeTeam = homeTeams[0].name;
      },
      error => (this.errorMessage = <any>error)
    );
    this.getLastGame();
  }

  public getLastGame() {
    this.gamesService.getLastGame().subscribe(
      game => {
        this.game = game;
        this.game.awayTeamLogoUrl = this.logoService.getLogoPath(
          this.game.AwayTeam,
          60
        );
        this.game.homeTeamLogoUrl = this.logoService.getLogoPath(
          this.game.HomeTeam,
          60
        );
      },
      error => (this.errorMessage = <any>error)
    );
  }
}

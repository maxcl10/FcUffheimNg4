import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { LogoService } from '../../shared/services/logo.service';

@Component({
  selector: 'fws-next-game',
  templateUrl: './next-game.component.html',
  providers: [GamesService, LogoService]
})
export class NextGameComponent implements OnInit {
  public game: Game;
  public errorMessage: string;

  public get isToday(): boolean {
    const today = new Date();
    const matchDate = new Date(this.game.MatchDate.toString());
    if (
      matchDate.getDate() === today.getDate() &&
      matchDate.getMonth() === today.getMonth() &&
      matchDate.getFullYear() === today.getFullYear()
    ) {
      return true;
    }
    return false;
  }

  constructor(
    private gamesService: GamesService,
    private logoService: LogoService
  ) {}

  public ngOnInit() {
    this.getNextGame();
  }

  private getNextGame() {
    this.gamesService.getNextGame().subscribe(
      game => {
        this.game = game;
        if (this.game != null) {
          this.game.awayTeamLogoUrl = this.logoService.getLogoPath(
            this.game.AwayTeam,
            30
          );
          this.game.homeTeamLogoUrl = this.logoService.getLogoPath(
            this.game.HomeTeam,
            30
          );
        }
      },
      error => (this.errorMessage = <any>error)
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from '../../../shared/models/game.model';
import { GamesService } from '../../../core/games.service';
import { Team } from '../../../shared/models/team.model';
import { TeamsService } from '../../../core/teams.service';

@Component({
  selector: 'fws-new-article',
  templateUrl: './new-game.component.html',
  providers: [GamesService, TeamsService]
})
export class NewGameComponent {
  public newTeamVisible: boolean;
  public teams: Team[];
  public game: Game;
  public errorMessage: string;
  public successfull: boolean;

  constructor(
    private gamesService: GamesService,
    private teamsService: TeamsService
  ) {
    this.game = new Game();
    this.successfull = false;
    this.getTeams();
    this.newTeamVisible = false;
  }

  public saveGame() {
    this.gamesService.createGame(this.game).subscribe(
      game => {
        this.goBack();
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public getTeams() {
    this.teamsService.getTeams().subscribe(
      teams => {
        this.teams = teams;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public goBack() {
    window.history.back();
  }

  public showNewTeamPanel() {
    $('#newTeamModal').modal('show');
  }

  public onTeamAdded(team: Team) {
    this.teams.push(team);
  }
}

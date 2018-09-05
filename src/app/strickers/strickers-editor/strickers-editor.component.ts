import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../stats/shared/stats.service';
import { TeamsService } from '../../teams/shared/teams.service';
import { Player } from '../../players/shared/player.model';
import { Stricker } from '../../stats/shared/stricker.model';

@Component({
  selector: 'fws-strickers-editor',
  templateUrl: './strickers-editor.component.html'
})
export class StrickersEditorComponent implements OnInit {
  public players: Player[];
  public strickers: Stricker[];
  constructor(
    private statService: StatsService,
    private teamService: TeamsService
  ) {}

  ngOnInit() {
    this.statService.getTeamStrickers().subscribe(result => {
      this.strickers = result;
    });
    // this.teamService.getHomeTeams().subscribe(teams => {
    //   const firstTeamId = teams[0].id;

    //   // Get the players from the teams
    //   this.teamService.getPlayers(firstTeamId).subscribe(players => {
    //     this.players = players;
    //   });
    // });
  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from '../../../shared/models/player.model';
import { Stricker } from '../../../stats/shared/stricker.model';
import { StatsService } from '../../../core/stats.service';
import { TeamsService } from '../../../core/teams.service';

@Component({
  selector: 'fws-strickers-editor',
  templateUrl: './edit-strickers.component.html'
})
export class EditStrickerComponent implements OnInit {
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

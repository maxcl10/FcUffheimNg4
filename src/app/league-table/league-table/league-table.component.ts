import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Ranking } from '../shared/league-table.model';
import { LeagueRankingsService } from '../shared/league-table.service';
import { LogoService } from '../../shared/services/logo.service';
import { TeamsService } from '../../teams/shared/teams.service';

@Component({
  selector: 'league-table',
  templateUrl: './league-table.component.html',
  providers: [LeagueRankingsService, LogoService, TeamsService]
})
export class LeagueTableComponent implements OnInit {
  public rankings: Ranking[];
  public errorMessage: string;
  public homeTeam: string;

  constructor(
    private rankingService: LeagueRankingsService,
    private logoService: LogoService,
    private teamsService: TeamsService
  ) {}

  // ngAfterViewInit()
  // {
  //     // var rows = $('#leagueTable > tbody > tr');
  //     // alert(rows.length);
  // }

  public ngOnInit() {
    this.teamsService.getHomeTeams().subscribe(
      homeTeams => {
        this.homeTeam = homeTeams[0].name;
      },
      error => (this.errorMessage = <any>error)
    );

    this.getRankings();
  }

  public getRankings() {
    this.rankingService.getRankings().subscribe(
      rankings => {
        rankings.forEach(element => {
          element.imageUrl = this.logoService.getLogoPath(element.team, 30);
        });
        this.rankings = rankings;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}

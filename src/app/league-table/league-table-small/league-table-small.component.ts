import { Component, OnInit } from '@angular/core';

import { Ranking } from '../shared/league-table.model';
import { LeagueRankingsService } from '../shared/league-table.service';

@Component({
  selector: 'league-table-small',
  templateUrl: './league-table-small.component.html',
  providers: [LeagueRankingsService]
})
export class LeagueTableSmallComponent implements OnInit {
  public rankings: Ranking[];
  public errorMessage: string;

  constructor(private rankingService: LeagueRankingsService) {}

  public ngOnInit() {
    this.getRankings();
  }

  public getRankings() {
    this.rankingService.getRankings().subscribe(
      rankings => {
        const myTeamPosition = rankings.find(o => o.team === 'Uffheim F.C.')
          .position;
        if (myTeamPosition <= 2) {
          // We want to display the 3 first and the two latest
          const firstTeams = rankings.filter(o => o.position <= 3);
          this.rankings = firstTeams;

          const latestTeams = rankings.filter(o => o.position > 12);
          latestTeams.forEach(element => {
            this.rankings.push(element);
          });
        } else if (myTeamPosition >= 11) {
          // We want to display the 2 first and the 3 latest
          const firstTeams = rankings.filter(o => o.position <= 2);
          this.rankings = firstTeams;

          const latestTeams = rankings.filter(o => o.position > 10);
          latestTeams.forEach(element => {
            this.rankings.push(element);
          });
        } else {
          const firstTeams = rankings.filter(o => o.position <= 2);
          this.rankings = firstTeams;

          let middleTeams;
          if (myTeamPosition === 3) {
            middleTeams = rankings.filter(
              o =>
                o.position === myTeamPosition ||
                o.position === myTeamPosition + 1
            );
          } else {
            middleTeams = rankings.filter(
              o =>
                o.position >= myTeamPosition - 1 &&
                o.position <= myTeamPosition + 1
            );
          }

          middleTeams.forEach(element => {
            this.rankings.push(element);
          });

          const latestTeams = rankings.filter(o => o.position > 12);
          latestTeams.forEach(element => {
            this.rankings.push(element);
          });
        }
      },
      error => (this.errorMessage = <any>error)
    );
  }
}

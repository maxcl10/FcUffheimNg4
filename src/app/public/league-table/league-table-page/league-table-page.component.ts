import { Component, OnInit } from '@angular/core';
import { LeagueTableComponent } from '../league-table/league-table.component';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../../app.config';
import { LeagueRankingsService } from '../../../core/services/league-table.service';
import { Competition } from '../../../shared/models/competition.model';

@Component({
  selector: 'fws-league-table-page',
  templateUrl: './league-table-page.component.html'
})
export class LeagueTablePageComponent implements OnInit {
  competition: Competition;

  constructor(
    private titleService: Title,
    private rankingService: LeagueRankingsService
  ) {}

  public ngOnInit() {
    this.rankingService.getChampionshipData().subscribe(result => {
      this.competition = result;
    });
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Classement'
    );
  }
}

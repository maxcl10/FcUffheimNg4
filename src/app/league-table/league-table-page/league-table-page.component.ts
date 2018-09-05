import { Component, OnInit } from '@angular/core';
import { LeagueTableComponent } from '../league-table/league-table.component';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'league-table-page',
  templateUrl: './league-table-page.component.html'
})
export class LeagueTablePageComponent implements OnInit {
  constructor(private titleService: Title) {}

  public ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Classement'
    );
  }
}

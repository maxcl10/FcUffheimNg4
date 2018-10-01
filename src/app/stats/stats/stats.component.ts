import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../app.config';
import { StatsService } from '../shared/stats.service';
import { Stricker } from '../shared/stricker.model';

@Component({
  selector: 'fws-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  constructor(private titleService: Title, private service: StatsService) {}

  public strickers: Stricker[];

  ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Classement'
    );
  }
}

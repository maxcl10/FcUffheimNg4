import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Classement'
    );
  }
}

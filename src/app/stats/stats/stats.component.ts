import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../app.config';
import { StatsService } from '../../core/stats.service';
import { Stricker } from '../shared/stricker.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'fws-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  constructor(private titleService: Title, private service: StatsService) {}

  public playerStats$: Observable<Stricker[]>;
  public concededGoalsPerGame$: Observable<number>;
  public scoredGoalsPerGame$: Observable<number>;
  public shape$: Observable<string[]>;

  ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Classement'
    );

    this.playerStats$ = this.service.getStrickers();
    this.scoredGoalsPerGame$ = this.service.getScoredGoalsPerGame();
    this.concededGoalsPerGame$ = this.service.getConcededGoalsPerGame();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Stricker } from '../shared/stricker.model';
import { StatsService } from '../shared/stats.service';

@Component({
  selector: 'fws-strikers',
  templateUrl: './strikers.component.html'
})
export class StrikersComponent implements OnInit {
  private _strickers: Stricker[];

  public totalGoals = 0;
  public totalChampionshipGoals = 0;
  public totalNationalCupGoals = 0;
  public totalRegionalCupGoals = 0;
  public totalOtherCupGoals = 0;

  @Input()
  set playerStats(playerStats: Stricker[]) {
    if (playerStats) {
      this._strickers = playerStats;

      this.strickers.forEach(element => {
        this.totalGoals += element.totalGoals;
        this.totalChampionshipGoals += element.championshipGoals;
        this.totalNationalCupGoals += element.nationalCupGoals;
        this.totalRegionalCupGoals += element.regionalCupGoals;
        this.totalOtherCupGoals += element.otherCupGoals;
      });
    }
  }

  get strickers(): Stricker[] {
    return this._strickers;
  }

  constructor(private service: StatsService) {}

  ngOnInit() {}
}

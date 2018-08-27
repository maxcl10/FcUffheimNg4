import { Component, OnInit, Input } from '@angular/core';
import { Stricker } from '../shared/stricker.model';
import { StatsService } from '../shared/stats.service';

@Component({
  selector: 'app-strikers',
  templateUrl: './strikers.component.html'
})
export class StrikersComponent implements OnInit {
  public strickers: Stricker[];
  public totalGoals = 0;
  public totalChampionshipGoals = 0;
  public totalNationalCupGoals = 0;
  public totalRegionalCupGoals = 0;
  public totalOtherCupGoals = 0;

  @Input()
  public count: number;

  constructor(private service: StatsService) {}

  ngOnInit() {
    this.service.getStrickers().subscribe(strickers => {
      this.strickers = strickers;

      this.strickers.forEach(element => {
        // this.totalGoals += element.totalGoals;
        this.totalChampionshipGoals += element.championshipGoals;
        this.totalNationalCupGoals += element.nationalCupGoals;
        this.totalRegionalCupGoals += element.regionalCupGoals;
        this.totalOtherCupGoals += element.otherCupGoals;
      });
    });
  }
}

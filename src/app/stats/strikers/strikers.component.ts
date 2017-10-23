import { Component, OnInit, Input } from '@angular/core';
import { StrickerStat } from '../shared/stricker.model';

@Component({
  selector: 'app-strikers',
  templateUrl: './strikers.component.html',
})
export class StrikersComponent implements OnInit {

  public strickersStats: StrickerStat[];
  public totalGoals: number = 0;
  public totalChampionshipGoals: number = 0;
  public totalNationalCupGoals: number = 0;
  public totalRegionalCupGoals: number = 0;


  @Input()
  public count: number;

  constructor() { }

  ngOnInit() {
    this.strickersStats = [];
    var stat1 = new StrickerStat("Sofiane Kecha", 5, 1, 3, 0);
    this.strickersStats.push(stat1);
    var stat3 = new StrickerStat("Hedi Riahi", 3, 1, 3, 0);
    this.strickersStats.push(stat3);
    var stat11 = new StrickerStat("Philippe Tran", 2, 0, 3, 0);
    this.strickersStats.push(stat11);
    var stat2 = new StrickerStat("Cédric Goepfert", 4, 0, 0, 0);
    this.strickersStats.push(stat2);
    var stat4 = new StrickerStat("Cédric Leroy", 2, 0, 0, 0);
    this.strickersStats.push(stat4);
    var stat5 = new StrickerStat("Gaetan Pilot", 2, 0, 0, 0);
    this.strickersStats.push(stat5);
    var stat6 = new StrickerStat("Arnaud Goepfert", 2, 0, 0, 0);
    this.strickersStats.push(stat6);
    var stat7 = new StrickerStat("Johan Stark", 1, 0, 1, 0);
    this.strickersStats.push(stat7);
    var stat8 = new StrickerStat("Kamel Benali", 0, 1, 0, 0);
    this.strickersStats.push(stat8);
    var stat9 = new StrickerStat("Ruben Arendt", 1, 0, 0, 0);
    this.strickersStats.push(stat9);
    var stat10 = new StrickerStat("Fabien Trebosc", 1, 0, 0, 0);
    this.strickersStats.push(stat10);
    var stat12 = new StrickerStat("Luc Wintzer", 0, 0, 1, 0);
    this.strickersStats.push(stat12);
    var stat13 = new StrickerStat("Eliott Fehr ", 0, 0, 1, 0);
    this.strickersStats.push(stat13);
    var stat14 = new StrickerStat("David Schwartz", 0, 0, 1, 0);
    this.strickersStats.push(stat14);
    var stat15 = new StrickerStat("Maxime Matter", 0, 0, 1, 0);
    this.strickersStats.push(stat15);

    if (this.count != undefined) {
      this.strickersStats = this.strickersStats.slice(0, this.count);
    }

    this.strickersStats.forEach(element => {
      this.totalGoals += element.totalGoals;
      this.totalChampionshipGoals += element.championshipGoals;
      this.totalNationalCupGoals += element.nationalCupGoals;
      this.totalRegionalCupGoals += element.regionalCupGoals;
    });
  }

}

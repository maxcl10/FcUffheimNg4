import { Component, OnInit, Input } from '@angular/core';
import { StrickerStat } from '../shared/stricker.model';

@Component({
  selector: 'app-strikers',
  templateUrl: './strikers.component.html',
})
export class StrikersComponent implements OnInit {

  public strickersStats: StrickerStat[];
  public totalGoals = 0;
  public totalChampionshipGoals = 0;
  public totalNationalCupGoals = 0;
  public totalRegionalCupGoals = 0;
  public totalOtherCupGoals = 0;


  @Input()
  public count: number;

  constructor() { }

  ngOnInit() {
    this.strickersStats = [];
    const stat1 = new StrickerStat('Sofiane Kecha', 9, 1, 4, 0);
    this.strickersStats.push(stat1);
    const stat3 = new StrickerStat('Hedi Riahi', 5, 1, 4, 0);
    this.strickersStats.push(stat3);
    const stat8 = new StrickerStat('Kamel Benali', 7, 2, 0, 0);
    this.strickersStats.push(stat8);
    const stat11 = new StrickerStat('Philippe Tran', 2, 0, 4, 0);
    this.strickersStats.push(stat11);
    const stat2 = new StrickerStat('Cédric Goepfert', 4, 0, 0, 0);
    this.strickersStats.push(stat2);
    const stat5 = new StrickerStat('Gaetan Pilot', 5, 0, 0, 0);
    this.strickersStats.push(stat5);
    const stat6 = new StrickerStat('Arnaud Goepfert', 3, 0, 0, 0);
    this.strickersStats.push(stat6);
    const stat15 = new StrickerStat('Maxime Matter', 1, 1, 1, 0);
    this.strickersStats.push(stat15);
    const stat4 = new StrickerStat('Cédric Leroy', 2, 0, 0, 0);
    this.strickersStats.push(stat4);
    const stat7 = new StrickerStat('Johan Stark', 1, 0, 1, 0);
    this.strickersStats.push(stat7);
    const stat13 = new StrickerStat('Eliott Fehr ', 1, 0, 1, 0);
    this.strickersStats.push(stat13);
    const stat9 = new StrickerStat('Ruben Arendt', 1, 0, 0, 0);
    this.strickersStats.push(stat9);
    const stat17 = new StrickerStat('David Mohr', 1, 0, 0, 0);
    this.strickersStats.push(stat17);
    const stat10 = new StrickerStat('Fabien Trebosc', 1, 0, 0, 0);
    this.strickersStats.push(stat10);
    const stat12 = new StrickerStat('Luc Wintzer', 0, 0, 1, 0);
    this.strickersStats.push(stat12);
    const stat14 = new StrickerStat('David Schwartz', 0, 0, 1, 0);
    this.strickersStats.push(stat14);
    const stat16 = new StrickerStat('Julien Burtz', 0, 0, 0, 1);
    this.strickersStats.push(stat16);
    const stat18 = new StrickerStat('Jeremie Schwartz', 0, 1, 0, 0);
    this.strickersStats.push(stat18);

    if (this.count !== undefined) {
      this.strickersStats = this.strickersStats.slice(0, this.count);
    }

    this.strickersStats.forEach(element => {
      this.totalGoals += element.totalGoals;
      this.totalChampionshipGoals += element.championshipGoals;
      this.totalNationalCupGoals += element.nationalCupGoals;
      this.totalRegionalCupGoals += element.regionalCupGoals;
      this.totalOtherCupGoals += element.otherCupGoals;
    });
  }

}

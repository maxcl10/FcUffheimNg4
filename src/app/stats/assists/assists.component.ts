import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../core/stats.service';
import { Stricker } from '../shared/stricker.model';

@Component({
  selector: 'fws-assists',
  templateUrl: './assists.component.html',
  styleUrls: ['./assists.component.css']
})
export class AssistsComponent {
  private _assists: Stricker[];

  @Input()
  set playerStats(playerStats: Stricker[]) {
    if (playerStats) {
      this._assists = playerStats
        .filter(o => o.championshipAssists > 0)
        .sort((n1, n2) => n2.championshipAssists - n1.championshipAssists);
    }
  }

  get assists(): Stricker[] {
    return this._assists;
  }
}

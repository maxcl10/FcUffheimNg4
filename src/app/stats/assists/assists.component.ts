import { Component, OnInit } from '@angular/core';
import { StatsService } from '../shared/stats.service';
import { Stricker } from '../shared/stricker.model';

@Component({
  selector: 'fws-assists',
  templateUrl: './assists.component.html',
  styleUrls: ['./assists.component.css']
})
export class AssistsComponent implements OnInit {
  public assists: Stricker[];
  public loading: boolean;
  constructor(private service: StatsService) {}

  ngOnInit() {
    this.loading = true;
    this.service.getStrickers().subscribe(strickers => {
      this.assists = strickers
        .filter(o => o.championshipAssists > 0)
        .sort((n1, n2) => n2.championshipAssists - n1.championshipAssists);

      this.loading = false;
    });
  }
}

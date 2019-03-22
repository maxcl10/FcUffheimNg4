import { Component, OnInit } from '@angular/core';
import { ClubService } from '../shared/club.service';
import { OrganizationalItem } from '../shared/organizational-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'fws-organizational-chart',
  templateUrl: './organizational-chart.component.html'
})
export class OrganizationalChartComponent implements OnInit {
  public organizationChart$: Observable<OrganizationalItem[]>;

  constructor(private service: ClubService) {}

  ngOnInit() {
    this.organizationChart$ = this.service.getOrganizationalChart();
  }
}

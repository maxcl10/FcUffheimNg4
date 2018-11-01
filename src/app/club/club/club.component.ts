import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClubService } from '../shared/club.service';
import { Club } from '../shared/club.model';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'fws-club',
  templateUrl: './club.component.html'
})
export class ClubComponent implements OnInit {
  constructor(private titleService: Title, private service: ClubService) {}

  public clubHistory$: Observable<Club>;

  public ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Club'
    );

    this.clubHistory$ = this.service.getClub();
  }
}

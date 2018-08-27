import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SponsorsService } from '../shared/sponsors.service';
import { Sponsor } from '../shared/sponsor.model';

@Component({
  selector: 'app-player',
  templateUrl: './sponsor.component.html'
})
export class SponsorComponent implements OnInit {
  constructor(private titleService: Title, private service: SponsorsService) {}

  public sponsors: Sponsor[];

  public ngOnInit() {
    this.titleService.setTitle('F.C Uffheim - Partenaires');

    this.service.getSponsors().subscribe(sponsors => {
      this.sponsors = sponsors;
    });
  }
}

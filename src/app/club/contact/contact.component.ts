import { Component, Output, OnInit, Input } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { ClubService } from '../shared/club.service';
import { Club } from '../shared/club.model';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public errorMessage: string;
  public club: Club;

  public googleMapUrl;
  public url;

  constructor(
    private titleService: Title,
    private service: ClubService,
    public sanitizer: DomSanitizer
  ) {}

  public ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Contact'
    );

    this.service.getClub().subscribe(club => {
      this.club = club;
      if (this.club.googleMap == null) {
        this.club.googleMap = 'Foot ' + this.club.city;
      }
      this.url =
        'https://www.google.com/maps/embed/v1/place?q=' +
        this.club.googleMap +
        '&key=AIzaSyAOPGDDgrY2StsOVlBeslyXXK_yDL4af0A';

      this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.url
      );
    });
  }
}

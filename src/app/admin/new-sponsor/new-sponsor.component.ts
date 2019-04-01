import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../../shared/models/sponsor.model';
import { SponsorsService } from '../../core/sponsors.service';

@Component({
  selector: 'fws-new-sponsor',
  templateUrl: './new-sponsor.component.html',
  styleUrls: ['./new-sponsor.component.css']
})
export class NewSponsorComponent implements OnInit {
  public sponsor: Sponsor;
  public errorMessage: string;
  public successfull: boolean;
  public body: String;

  constructor(private sponsorService: SponsorsService) {
    this.sponsor = new Sponsor();
    this.successfull = false;
  }

  ngOnInit(): void {}

  public saveSponsor() {
    this.sponsorService.createSponsor(this.sponsor).subscribe(
      sponsor => {
        this.goBack();
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public goBack() {
    window.history.back();
  }
}

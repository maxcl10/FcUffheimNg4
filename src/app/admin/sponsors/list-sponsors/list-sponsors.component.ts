import { Component, OnInit } from '@angular/core';
import { SponsorsService } from '../../../core/sponsors.service';
import { Observable } from 'rxjs';
import { Sponsor } from '../../../shared/models/sponsor.model';

@Component({
  selector: 'fws-list-sponsors',
  templateUrl: './list-sponsors.component.html',
  styleUrls: ['./list-sponsors.component.scss']
})
export class ListSponsorsComponent implements OnInit {
  sponsors$: Observable<Sponsor[]>;

  constructor(private sponsorService: SponsorsService) {}

  ngOnInit() {
    this.sponsors$ = this.sponsorService.getSponsors();
  }
}

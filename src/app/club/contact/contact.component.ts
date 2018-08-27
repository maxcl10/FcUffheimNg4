import { Component, Output, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClubService } from '../shared/club.service';
import { Club } from '../shared/club.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  // providers: [ArticlesService]
})

export class ContactComponent implements OnInit {

  public errorMessage: string;
  public club: Club;

  constructor(private titleService: Title,  private service: ClubService) {

  }



  public ngOnInit() {
    this.titleService.setTitle('F.C Uffheim - Contact');

    this.service.getClub().subscribe((club) => {
      this.club = club;
    });
  }
}

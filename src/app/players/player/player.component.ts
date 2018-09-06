import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from '../shared/player.model';
import { PlayersService } from '../shared/players.service';
import { FrDatePipeComponent } from '../../shared/pipes/fr-date-pipe';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { SeoService } from '../../shared/services/seo.service';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  providers: [PlayersService, AuthenticationService]
})
export class PlayerComponent implements OnInit {
  public player: Player;
  public errorMessage: string;
  private sub: any;
  public isAuthenticated: boolean;

  public get playerAge(): number {
    return this.getAge(this.player.dateOfBirth);
  }

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private seoService: SeoService
  ) {
    this.player = new Player();
  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.getPlayer(id);
    });
    this.isAuthenticated = this.authenticationService.checkCredentials();
  }

  public getPlayer(id: string) {
    this.playerService.getplayer(id).subscribe(
      player => {
        this.player = player;

        this.seoService.setTitle(
          AppConfig.settings.properties.siteName +
            ' - ' +
            this.player.lastName +
            ' ' +
            this.player.firstName
        );
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  public deletePlayer() {
    this.playerService
      .deleteplayer(this.player.id)
      .subscribe(
        result => this.goBack(),
        error => (this.errorMessage = <any>error)
      );
  }

  public goToEdit() {
    this.router.navigate(['/editPlayer', this.player.id]);
  }

  public goBack() {
    window.history.back();
  }
}

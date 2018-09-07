import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayersService } from '../../players/shared/players.service';
import { TeamsService } from '../../teams/shared/teams.service';
import { Player } from '../../players/shared/player.model';

import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  providers: [PlayersService, TeamsService]
})
export class TeamComponent implements OnInit {
  public goalkeeperPlayers: Player[] = [];
  public defenderPlayers: Player[] = [];
  public midfieldPlayers: Player[] = [];
  public attackerPlayers: Player[] = [];
  public coaches: Player[] = [];

  public players: Player[];
  public errorMessage: string;
  private sub: any;

  constructor(
    private playersService: PlayersService,
    private titleService: Title,
    private route: ActivatedRoute,
    private teamService: TeamsService
  ) {}

  public ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Equipe'
    );

    this.sub = this.route.params.subscribe(params => {
      // Clear because can be redirected from the same page
      this.players = [];
      this.goalkeeperPlayers = [];
      this.defenderPlayers = [];
      this.midfieldPlayers = [];
      this.attackerPlayers = [];
      this.coaches = [];

      const id = params['id'];
      this.teamService.getPlayers(id).subscribe(
        players => {
          this.players = players;

          this.players.forEach(element => {
            if (element.position === 'Milieu') {
              this.midfieldPlayers.push(element);
            } else if (element.position === 'Gardien') {
              this.goalkeeperPlayers.push(element);
            } else if (element.position === 'Defenseur') {
              this.defenderPlayers.push(element);
            } else if (element.position === 'Attaquant') {
              this.attackerPlayers.push(element);
            } else if (
              element.position === 'Entraineur' ||
              element.position === 'Entraineur Adjoint' ||
              element.position === 'Entraineur Gardien' ||
              element.position === 'Dirigeant'
            ) {
              this.coaches.push(element);
            }
          });
          this.coaches.sort(this.compare);
        },
        error => (this.errorMessage = <any>error)
      );
    });
    // this.getPlayers();
  }

  public compare(a: Player, b: Player) {
    if (a.position === 'Entraineur') {
      return 1;
    }

    if (a.position === 'Entraineur Adjoint') {
      return 1;
    }
    if (a.position === 'Entraineur Gardien') {
      return 1;
    }
    if (a.position === 'Dirigeant') {
      return 1;
    }

    return 0;
  }

  public getPlayers() {
    this.playersService.getplayers().subscribe(
      players => {
        this.players = players;
        this.players.forEach(element => {
          if (element.position === 'Milieu') {
            this.midfieldPlayers.push(element);
          } else if (element.position === 'Gardien') {
            this.goalkeeperPlayers.push(element);
          } else if (element.position === 'Defenseur') {
            this.defenderPlayers.push(element);
          } else if (element.position === 'Attaquant') {
            this.attackerPlayers.push(element);
          }
        });
      },
      error => (this.errorMessage = <any>error)
    );
  }
}

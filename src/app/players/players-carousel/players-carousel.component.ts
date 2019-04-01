import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from '../../shared/models/player.model';
import { TeamsService } from '../../core/teams.service';

@Component({
  selector: 'fws-players-carousel',
  templateUrl: './players-carousel.component.html',
  providers: [TeamsService]
})
export class PlayersCarouselComponent implements OnInit {
  players: Player[];
  player: Player;
  errorMessage: string;

  constructor(
    private playerService: TeamsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private sub: any;

  ngOnInit() {
    this.player = new Player();
    this.getPlayers();
  }

  changePlayer(players: Player[]) {
    const index = Math.round(Math.random() * (players.length - 2) + 1);
    this.player = players[index];
  }

  getPlayers() {
    this.playerService.getCurrentPlayers().subscribe(
      players => {
        this.players = players;
        this.changePlayer(players);
        setInterval(() => this.changePlayer(players), 15000);
      },

      error => (this.errorMessage = <any>error)
    );
  }

  getIndex(player: Player) {
    const index = this.players.indexOf(player);
    alert(index);
    return index;
  }
}

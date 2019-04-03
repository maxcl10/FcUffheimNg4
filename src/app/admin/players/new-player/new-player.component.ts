import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../core/players.service';
import { Player } from '../../../shared/models/player.model';

@Component({
  selector: 'fws-new-player',
  templateUrl: './new-player.component.html',
  providers: [PlayersService]
})
export class NewPlayerComponent {
  public player: Player;
  public errorMessage: string;
  public successfull: boolean;

  constructor(private playersService: PlayersService) {
    this.player = new Player();
    this.successfull = false;
  }

  public savePlayer() {
    this.playersService.createplayer(this.player).subscribe(
      player => {
        this.successfull = true;
        this.errorMessage = null;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public goBack() {
    window.history.back();
  }
}

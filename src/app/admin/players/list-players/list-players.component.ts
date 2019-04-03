import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../core/players.service';
import { Player } from '../../../shared/models/player.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'fws-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit {
  public players$: Observable<Player[]>;
  constructor(private playersService: PlayersService, private router: Router) {}

  ngOnInit() {
    this.players$ = this.playersService.getplayers();
  }

  public onPlayerSelect(player: Player) {
    this.goToPlayerDetails(player);
  }

  public goToPlayerDetails(player: Player) {
    this.router.navigate(['/player', player.id]);
  }
}

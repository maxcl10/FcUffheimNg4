import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../core/services/games.service';
import { Player } from '../../../shared/models/player.model';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../shared/models/game.model';
import { TeamsService } from '../../../core/services/teams.service';
import { GamePlayer } from '../../../shared/models/game-player.model';
import { Event } from '../../../shared/models/event.model';
import { EventsService } from '../../../core/services/events.service';

@Component({
  selector: 'fws-edit-game-players',
  templateUrl: './edit-game-players.component.html',
  styleUrls: ['./edit-game-players.component.scss']
})
export class EditGamePlayersComponent implements OnInit {
  gamePlayers: GamePlayer[];
  newGamePlayer: GamePlayer;
  events: Event[];
  newEvent: Event;
  selectedGamePlayer: GamePlayer;
  selectedGamePlayerEvents: Event[];
  players: Player[];
  selectedPlayer: Player;
  game: Game;
  position: string;

  constructor(
    private gamesService: GamesService,
    private playerService: TeamsService,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  order = [
    'GB',
    'DD',
    'DG',
    'DCG',
    'DCD',
    'DCC',
    'ALD',
    'ALG',
    'MDC',
    'MDG',
    'MD',
    'MOD',
    'MC',
    'MDD',
    'MG',
    'MOG',
    'MOC',
    'AVD',
    'AVC',
    'AVG',
    'R1',
    'R2',
    'R3'
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newGamePlayer = new GamePlayer();

      const id = params['id'];
      this.gamesService.getGamePlayers(id).subscribe(players => {
        this.gamePlayers = players.sort((a, b) => {
          return (
            this.order.findIndex(o => o === a.position) -
            this.order.findIndex(o => o === b.position)
          );
        });

        this.gamesService.getGameEvents(id).subscribe(events => {
          this.events = events;

          this.gamePlayers.forEach(element => {
            element.events = this.events.filter(
              o => o.gamePlayerId === element.id
            );
          });
        });
      });

      this.gamesService.getGame(id).subscribe(game => {
        this.game = game;
      });

      this.playerService.getCurrentPlayers().subscribe(players => {
        this.players = players;
      });
    });
  }

  addPlayer() {
    this.gamesService
      .addGamePlayer(this.game.Id, this.newGamePlayer)
      .subscribe(result => {
        this.gamePlayers.push(result);
        this.newGamePlayer = new GamePlayer();
      });
  }

  selectGamePlayer(gamePlayer: GamePlayer) {
    this.selectedGamePlayer = gamePlayer;
    this.newEvent = new Event();
    this.newEvent.gamePlayerId = gamePlayer.id;
    this.newEvent.playerFirstName = gamePlayer.playerFirstName;
    this.newEvent.playerLastName = gamePlayer.playerLastName;
    this.selectedGamePlayerEvents = this.events.filter(
      o => o.gamePlayerId === gamePlayer.id
    );
  }

  removePlayer(player: GamePlayer) {
    this.gamesService
      .deleteGamePlayer(this.game.Id, player.playerId)
      .subscribe(() => {
        const index = this.gamePlayers.indexOf(player);
        this.gamePlayers.splice(index, 1);
      });
  }

  addEvent() {
    this.newEvent.gamePlayerId = this.selectedGamePlayer.id;
    this.eventsService.addEvent(this.newEvent).subscribe(result => {
      this.events.push(result);
      this.selectedGamePlayerEvents.push(result);
    });
  }

  delete(event: Event) {
    this.eventsService.deleteEvent(event).subscribe(() => {
      const index = this.events.indexOf(event);
      this.events.splice(index, 1);

      const index2 = this.selectedGamePlayerEvents.indexOf(event);
      this.selectedGamePlayerEvents.splice(index2, 1);
    });
  }
}

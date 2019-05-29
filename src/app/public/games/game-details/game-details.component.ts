import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../core/services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../shared/models/game.model';
import { GamePlayer } from '../../../shared/models/game-player.model';
import { LogoService } from '../../../core/services/logo.service';
import { Event } from '../../../shared/models/event.model';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'fws-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game: Game;
  players: GamePlayer[];
  goals: Event[];
  article: Article;

  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute,
    private logoService: LogoService
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
    'MDG',
    'MG',
    'MOD',
    'MC',
    'MDD',
    'MD',
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
      const id = params['id'];

      this.gameService.getGame(id).subscribe(game => {
        this.game = game;

        this.game.homeTeamLogoUrl = this.logoService.getLogoPath(
          game.HomeTeam,
          100
        );
        this.game.awayTeamLogoUrl = this.logoService.getLogoPath(
          game.AwayTeam,
          100
        );
      });

      this.gameService.getGamePlayers(id).subscribe(players => {
        this.players = players.sort((a, b) => {
          return (
            this.order.findIndex(o => o === a.position) -
            this.order.findIndex(o => o === b.position)
          );
        });
      });

      this.gameService.getGameEvents(id).subscribe(events => {
        this.goals = events
          .filter(o => o.eventTypeId === 0)
          .sort((a, b) => {
            return a.time - b.time;
          });

        this.gameService.getGameArticle(id).subscribe(article => {
          this.article = article;
        });
      });
    });
  }
}

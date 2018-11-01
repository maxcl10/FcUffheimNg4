import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Article, ArticlesService } from '../../articles/shared/index';

import { PlayersService } from '../../players/shared/players.service';
import { Player } from '../../players/shared/player.model';

import { GamesService } from '../../games/shared/games.service';
import { Game } from '../../games/shared/game.model';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'fws-admin',
  templateUrl: './admin.component.html',
  providers: [
    ArticlesService,
    AuthenticationService,
    PlayersService,
    GamesService
  ]
})
export class AdminComponent implements OnInit, OnDestroy {
  @Output()
  public selectedArticle: Article;

  public articles$: Observable<Article[]>;
  public games$: Observable<Game[]>;
  public players: Player[];

  public playerSubscription: Subscription;

  public errorMessage: string;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private playersService: PlayersService,
    private gameservice: GamesService
  ) {}

  public ngOnInit() {
    if (!this.authenticationService.checkCredentials()) {
      this.router.navigate(['/login']);
    } else {
      this.playerSubscription = this.playersService
        .getplayers()
        .subscribe(result => {
          this.players = result;
        });
      this.articles$ = this.articlesService.getArticles();
      this.games$ = this.gameservice.getGames();
    }
  }

  public onselect(article: Article) {
    this.selectedArticle = article;
    this.goToDetails(this.selectedArticle);
  }

  public onPlayerSelect(player: Player) {
    this.goToPlayerDetails(player);
  }

  public onGameSelect(game: Game) {
    this.goToEditGame(game);
  }

  public goToEditGame(game: Game) {
    this.router.navigate(['/editGame', game.Id]);
  }

  public goToPlayerDetails(player: Player) {
    this.router.navigate(['/player', player.id]);
  }

  public goToDetails(article: Article) {
    this.router.navigate(['/article', article.id]);
  }

  public ngOnDestroy(): void {
    this.playerSubscription.unsubscribe();
  }
}

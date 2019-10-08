import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GamesService } from '../../../core/services/games.service';
import { LogoService } from '../../../core/services/logo.service';
import { Game } from '../../../shared/models/game.model';
import { Event } from '../../../shared/models/event.model';
import { GamePlayer } from '../../../shared/models/game-player.model';
import * as html2Canvas from 'html2canvas';

@Component({
  selector: 'fws-game-poster',
  templateUrl: './game-poster.component.html',
  styleUrls: ['./game-poster.component.scss']
})
export class GamePosterComponent implements OnInit {
  public nextgame: Game;
  public nextgames: Game[];
  public lastgame: Game;
  public errorMessage: string;
  goals: Event[];
  players: GamePlayer[];
  game: Game;

  @ViewChild('screen', { static: false }) screen: ElementRef;
  // @ViewChild('canvas') canvas: ElementRef;
  // @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(
    private gamesService: GamesService,
    private logoService: LogoService
  ) {}

  public ngOnInit() {
    this.getNextGame();
    this.getLastGame();
    this.getNextGames();

    this.getGame('0c0d815c-e690-4602-8425-9842161827b1');
  }

  public downloadImage() {
    html2canvas(this.screen.nativeElement).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  }

  //   let element = document.querySelector("#capture");
  //   html2canvas(document).then(function(canvas) {
  //       // Convert the canvas to blob
  //       canvas.toBlob(function(blob){
  //           // To download directly on browser default 'downloads' location
  //           let link = document.createElement("a");
  //           link.download = "image.png";
  //           link.href = URL.createObjectURL(blob);
  //           link.click();

  //           // To save manually somewhere in file explorer
  //           window.saveAs(blob, 'image.png');

  //       },'image/png');
  //   });

  // html2canvas(this.screen.nativeElement).then(canvas => {
  //   this.canvas.nativeElement.src = canvas.toDataURL();
  //   this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
  //   this.downloadLink.nativeElement.download = 'marble-diagram.png';
  //   this.downloadLink.nativeElement.click();
  // });
  //

  //   pdfDownload() {
  //     let self = this; // use this variable to access your class members inside then().
  //     html2canvas(document.body).then(canvas => {
  //         var imgData = canvas.toDataURL("image/png");
  //         self.AddImagesResource(imgData);
  //         document.body.appendChild(canvas);
  //    });
  // }

  public getLastGame() {
    this.gamesService.getLastGame().subscribe(
      game => {
        this.lastgame = game;
        this.lastgame.awayTeamLogoUrl = this.logoService.getLogoPath(
          this.lastgame.AwayTeam,
          100
        );
        this.lastgame.homeTeamLogoUrl = this.logoService.getLogoPath(
          this.lastgame.HomeTeam,
          100
        );
        this.gamesService.getGameEvents(game.Id).subscribe(events => {
          this.goals = events
            .filter(o => o.eventTypeId === 0)
            .sort((a, b) => {
              return a.time - b.time;
            });
        });
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public getNextGames() {
    this.gamesService.getNextGames().subscribe(games => {
      this.nextgames = games;
    });
  }

  private getGame(gameId: string) {
    this.gamesService.getGame(gameId).subscribe(
      game => {
        this.game = game;
        if (this.game != null) {
          this.game.awayTeamLogoUrl = this.logoService.getLogoPath(
            this.game.AwayTeam,
            100
          );
          this.game.homeTeamLogoUrl = this.logoService.getLogoPath(
            this.game.HomeTeam,
            100
          );
        }
      },
      error => (this.errorMessage = <any>error)
    );
  }

  private getNextGame() {
    this.gamesService.getNextGame().subscribe(
      game => {
        this.nextgame = game;
        if (this.nextgame != null) {
          this.nextgame.awayTeamLogoUrl = this.logoService.getLogoPath(
            this.nextgame.AwayTeam,
            100
          );
          this.nextgame.homeTeamLogoUrl = this.logoService.getLogoPath(
            this.nextgame.HomeTeam,
            100
          );
        }

        this.gamesService.getGamePlayers(this.nextgame.Id).subscribe(
          players => {
            this.players = players;
          },
          error => (this.errorMessage = <any>error)
        );
      },
      error => (this.errorMessage = <any>error)
    );
  }
}

import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Player} from '../shared/player.model'
import {TeamsService} from '../../teams/shared/teams.service';

import {PlayerDetailsSmallComponent} from '../player-details-small/player-details-small.component'

@Component({
    selector: 'players-carousel',
    templateUrl: './players-carousel.component.html',
    providers: [TeamsService],  
})

export class PlayersCarouselComponent implements OnInit {

    players: Player[];
    player: Player;
    errorMessage: string;

    constructor(private playerService: TeamsService, private route: ActivatedRoute, private router: Router) {

    }

    private sub: any;

    ngOnInit() {
        this.player = new Player();
        this.getPlayers();
    }

    changePlayer(players: Player[]) {
        var index = Math.round(Math.random() * (players.length-2) + 1);      
            this.player = players[index];            
    }

    getPlayers() {
        this.playerService.getCurrentPlayers().subscribe(
            players => {
                this.players = players;             
                setInterval(this.changePlayer(players), 5000);
            },

            error => this.errorMessage = <any>error);
    }

    getIndex(player: Player) {
        var index = this.players.indexOf(player);
        alert(index);
        return index;
    }
}




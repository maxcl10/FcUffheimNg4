import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { Player } from '../../players/shared/player.model';
import { TeamsService } from '../../teams/shared/teams.service';

// import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'edit-team',
    templateUrl: './edit-team.component.html',
    providers: [TeamsService],
})

export class EditTeamComponent implements OnInit {

    @Input()
    set allPlayers(players: Player[]){

                this.teamService.getPlayers(this.teamId).subscribe(
            (teamPlayers) => {
                this.teamPlayers = teamPlayers;                
                this.poolPlayers = this.arr_diff(players, teamPlayers);               
            },
            (error) => this.errorMessage = <any>error);
        }

               

    public teamId: string;
    public poolPlayers: Player[];  
    public teamPlayers: Player[];  
    public errorMessage: string;

    constructor(private teamService: TeamsService) {
        // Equipe1
        this.teamId = 'b8bc86da-9eea-4820-a5d5-c9f57b3b7d80';
        // Equipe 2 3707ef89-38c6-4f94-bc97-98238eaef435
        //  this.teamId = ' 3707ef89-38c6-4f94-bc97-98238eaef435';      
    }

    public ngOnInit() {

        
    }

    private arr_diff(a1: Player[], a2: Player[]): Player[] {
        let buffer = [];
        if (a1 != null && a1 != undefined) {
            a1.forEach((element) => {
                if (a2.filter((o) => o.id === element.id).length === 0) {
                    buffer.push(element);
                }
            });
        }      
        return buffer;
      
    };

    public add(player: Player) {
        this.teamService.addPlayerInTeam(player.id, this.teamId).subscribe(
            (res) => {
                if (res === true) {
                    this.teamPlayers.push(player);
                    let index = this.poolPlayers.indexOf(player);
                    this.poolPlayers.splice(index, 1);
                }
            },
            (error) => this.errorMessage = <any>error);
    }

    public remove(player: Player) {
        this.teamService.removePlayerFromTeam(player.id, this.teamId).subscribe(
            (res) => {
                if (res === true) {
                    this.poolPlayers.push(player);
                    let index = this.teamPlayers.indexOf(player);
                    this.teamPlayers.splice(index, 1);
                }
            }
        );
    }
}

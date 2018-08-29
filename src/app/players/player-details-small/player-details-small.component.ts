import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from '../shared/player.model';
import { FrDatePipeComponent } from '../../shared/pipes/fr-date-pipe';

@Component({
  selector: 'player-details-small',
  templateUrl: './player-details-small.component.html'
})
export class PlayerDetailsSmallComponent {
  @Input()
  public player: Player;

  public get playerAge(): number {
    return this.getAge(this.player.dateOfBirth);
  }

  public getAge(dateString) {
    if (dateString !== undefined) {
      const today = new Date();
      // safari workarrround
      const match = dateString.match(/^(\d+)-(\d+)-(\d+)T(\d+)\:(\d+)\:(\d+)$/);
      const birthDate = new Date(
        match[1],
        match[2] - 1,
        match[3],
        match[4],
        match[5],
        match[6]
      );
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
}

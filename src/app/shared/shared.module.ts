import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { FrDatePipe } from './pipes/fr-date-pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { GameComponent } from './components/game/game.component';
import { GameScoreComponent } from './components/game-score/game-score.component';
import { GuideComponent } from './components/guide/guide.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { TeamNamePipe } from './pipes/team-name';
import { PitchComponent } from '../shared/components/pitch/pitch.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchPipe,
    FrDatePipe,
    TeamNamePipe,
    LoadingSpinnerComponent,
    GameComponent,
    GameScoreComponent,
    GuideComponent,
    CompetitionComponent,
    PitchComponent
  ],
  exports: [
    SearchPipe,
    FrDatePipe,
    TeamNamePipe,
    GameComponent,
    GameScoreComponent,
    CompetitionComponent,
    PitchComponent
  ]
})

// Contains components, directives and pipes that are shared accross the modules
export class SharedModule {}

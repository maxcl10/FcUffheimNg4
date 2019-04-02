import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { FrDatePipe } from './pipes/fr-date-pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { GameComponent } from './components/game/game.component';
import { GameScoreComponent } from './components/game-score/game-score.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchPipe,
    FrDatePipe,
    LoadingSpinnerComponent,
    GameComponent,
    GameScoreComponent
  ],
  exports: [
    CommonModule,
    SearchPipe,
    FrDatePipe,
    GameComponent,
    GameScoreComponent
  ]
})

// Contains components, directives and pipes that are shared accross the modules
export class SharedModule {}

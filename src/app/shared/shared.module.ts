import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { FrDatePipe } from './pipes/fr-date-pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchPipe, FrDatePipe],
  exports: [CommonModule, SearchPipe, FrDatePipe]
})

// Contains components, directives and pipes that are shared accross the modules
export class SharedModule {}

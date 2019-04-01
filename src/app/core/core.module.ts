import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './authentication.service';
import { CheckForUpdateService } from './check-for-update.service';
import { LogoService } from './logo.service';
import { SeoService } from './seo.service';
import { PromptUpdateService } from './prompt-update.service';
import { LogUpdateService } from './log-update.service';
import { GamesService } from './games.service';
import { ArticlesService } from './articles.service';
import { ClubService } from './club.service';
import { SponsorsService } from './sponsors.service';
import { StatsService } from './stats.service';
import { LeagueRankingsService } from './league-table.service';
import { TeamsService } from './teams.service';

// This module contains all the services and all the top level app components
@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    AuthenticationService,
    CheckForUpdateService,
    LogoService,
    SeoService,
    PromptUpdateService,
    LogUpdateService,
    GamesService,
    ArticlesService,
    ClubService,
    SponsorsService,
    StatsService,
    LeagueRankingsService,
    TeamsService
  ]
})
export class CoreModule {}

import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Externals
import { ChartsModule } from 'ng2-charts/ng2-charts';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';

// Mine
import { HomeComponent } from './home/home/home.component';
import { TeamComponent } from './teams/team/team.component';
import { HistoryComponent } from './club/history/history.component';

// Articles components
import { ArticleComponent } from './articles/article/article.component';

// Players components
import { PlayerComponent } from './players/player/player.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerDetailsSmallComponent } from './players/player-details-small/player-details-small.component';
import { PlayersCarouselComponent } from './players/players-carousel/players-carousel.component';

// Games
import { GamesPieChartComponent } from './games/games-pie-chart/games-pie-chart.component';
import { GamesComponent } from './games/games-list/games-list.component';
import { NextGameComponent } from './games/next-game/next-game.component';
import { LastGameComponent } from './games/last-game/last-game.component';
import { TodayGameComponent } from './games/today-game/today-game.component';

// Team
import { LeagueTablePageComponent } from './league-table/league-table-page/league-table-page.component';
import { LeagueTableSmallComponent } from './league-table/league-table-small/league-table-small.component';

// League table
import { LeagueTableComponent } from './league-table/league-table/league-table.component';

import { ContactComponent } from './club/contact/contact.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';

import { AppConfig } from './app.config';

import { RankingHistoryComponent } from './stats/ranking-History-chart/ranking-history-chart.component';

import { LastFiveGamesComponent } from './stats/last-five-games/last-five-games.component';
import { StrikersComponent } from './stats/strikers/strikers.component';
import { StatsComponent } from './stats/stats/stats.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AssistsComponent } from './stats/assists/assists.component';
import { SeasonSummaryComponent } from './stats/season-summary/season-summary.component';

import { GuideComponent } from './style/guide/guide.component';
import { OrganizationalChartComponent } from './club/organizational-chart/organizational-chart.component';

// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    HistoryComponent,
    ArticleComponent,
    PlayerComponent,
    ContactComponent,
    SponsorComponent,
    GamesComponent,
    LeagueTablePageComponent,
    NextGameComponent,
    PlayersCarouselComponent,
    LeagueTableSmallComponent,
    GamesPieChartComponent,
    LastGameComponent,
    TodayGameComponent,
    PlayerDetailsComponent,
    LeagueTableComponent,
    PlayerDetailsSmallComponent,
    RankingHistoryComponent,
    LastFiveGamesComponent,
    StrikersComponent,
    StatsComponent,
    AssistsComponent,
    SeasonSummaryComponent,
    GuideComponent,
    OrganizationalChartComponent
  ],
  imports: [
    // import Angular's modules
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    // App modules
    CoreModule,
    SharedModule,
    // Service worker
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled:
        environment.name === 'production' ||
        environment.name === 'fcb' ||
        environment.name === 'fcu'
    })
  ],
  providers: [
    // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    Title,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true
    }
  ]
})
export class AppModule {}

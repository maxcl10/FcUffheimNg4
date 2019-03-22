import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { SeoService } from './shared/services/seo.service';

import { EditorModule } from '@tinymce/tinymce-angular';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';

// Mine
import { HomeComponent } from './home/home/home.component';
import { TeamComponent } from './teams/team/team.component';
import { HistoryComponent } from './club/history/history.component';
import { AdminComponent } from './admin/admin/admin.component';

// Articles components
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { ArticleComponent } from './articles/article/article.component';

import { LoginComponent } from './admin/login/login.component';

// Players components
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { PlayerComponent } from './players/player/player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerDetailsSmallComponent } from './players/player-details-small/player-details-small.component';
import { PlayersCarouselComponent } from './players/players-carousel/players-carousel.component';

// Games
import { GamesPieChartComponent } from './games/games-pie-chart/games-pie-chart.component';
import { GamesComponent } from './games/games-list/games-list.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { NextGameComponent } from './games/next-game/next-game.component';
import { LastGameComponent } from './games/last-game/last-game.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { TodayGameComponent } from './games/today-game/today-game.component';
// Team
import { NewTeamComponent } from './teams/new-team/new-team.component';
import { LeagueTablePageComponent } from './league-table/league-table-page/league-table-page.component';
import { LeagueTableSmallComponent } from './league-table/league-table-small/league-table-small.component';

// League table
import { LeagueTableComponent } from './league-table/league-table/league-table.component';

import { UploadRankingComponent } from './admin/upload-ranking/upload-ranking.component';
import { ContactComponent } from './club/contact/contact.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';

import { AppConfig } from './app.config';
import { APP_INITIALIZER } from '@angular/core';

import { FrDatePipeComponent } from './shared/pipes/fr-date-pipe';

import { EditTeamComponent } from './admin/edit-team/edit-team.component';

import { ArticlesService } from './articles/shared/articles.service';
import { RankingHistoryComponent } from './stats/ranking-History-chart/ranking-history-chart.component';

import { LastFiveGamesComponent } from './stats/last-five-games/last-five-games.component';
import { StrikersComponent } from './stats/strikers/strikers.component';
import { StatsComponent } from './stats/stats/stats.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClubService } from './club/shared/club.service';
import { SponsorsService } from './sponsors/shared/sponsors.service';
import { StatsService } from './stats/shared/stats.service';
import { StrickersEditorComponent } from './strickers/strickers-editor/strickers-editor.component';
import { EditPlayerStatsComponent } from './strickers/edit-player-stats/edit-player-stats.component';
import { NewSponsorComponent } from './sponsors/new-sponsor/new-sponsor.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { AssistsComponent } from './stats/assists/assists.component';
import { SeasonSummaryComponent } from './stats/season-summary/season-summary.component';
import { LeagueRankingsService } from './league-table/shared/league-table.service';
import { TeamsService } from './teams/shared/teams.service';
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
    AdminComponent,
    NewArticleComponent,
    ArticleComponent,
    EditArticleComponent,
    LoginComponent,
    NewPlayerComponent,
    PlayerComponent,
    EditPlayerComponent,
    UploadRankingComponent,
    ContactComponent,
    SponsorComponent,
    GamesComponent,
    NewGameComponent,
    EditGameComponent,
    LeagueTablePageComponent,
    NextGameComponent,
    PlayersCarouselComponent,
    LeagueTableSmallComponent,
    GamesPieChartComponent,
    LastGameComponent,
    TodayGameComponent,
    PlayerDetailsComponent,
    FrDatePipeComponent,
    SearchPipe,
    NewTeamComponent,
    LeagueTableComponent,
    PlayerDetailsSmallComponent,
    RankingHistoryComponent,
    EditTeamComponent,
    LastFiveGamesComponent,
    StrikersComponent,
    StatsComponent,
    StrickersEditorComponent,
    EditPlayerStatsComponent,
    NewSponsorComponent,
    AssistsComponent,
    SeasonSummaryComponent,
    GuideComponent,
    OrganizationalChartComponent
  ],
  imports: [
    // import Angular's modules
    BrowserModule,
    ChartsModule,
    EditorModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
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
    ArticlesService,
    Title,
    SeoService,
    ClubService,
    StatsService,
    LeagueRankingsService,
    TeamsService,
    SponsorsService,
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

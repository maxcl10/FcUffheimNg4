import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modules
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from '../shared/shared.module';

// Routing
import { AdminRoutingModule } from './public-routing.module';

// My components
import { HomeComponent } from './home/home/home.component';
import { TeamComponent } from './teams/team/team.component';
import { HistoryComponent } from './club/history/history.component';
import { ArticleComponent } from './articles/article/article.component';
import { PlayerComponent } from './players/player/player.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerDetailsSmallComponent } from './players/player-details-small/player-details-small.component';
import { PlayersCarouselComponent } from './players/players-carousel/players-carousel.component';
import { GamesPieChartComponent } from './games/games-pie-chart/games-pie-chart.component';
import { GamesComponent } from './games/games-list/games-list.component';
import { NextGameComponent } from './games/next-game/next-game.component';
import { LastGameComponent } from './games/last-game/last-game.component';
import { TodayGameComponent } from './games/today-game/today-game.component';
import { LeagueTablePageComponent } from './league-table/league-table-page/league-table-page.component';
import { LeagueTableSmallComponent } from './league-table/league-table-small/league-table-small.component';
import { LeagueTableComponent } from './league-table/league-table/league-table.component';
import { ContactComponent } from './club/contact/contact.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';
import { RankingHistoryComponent } from './stats/ranking-History-chart/ranking-history-chart.component';
import { LastFiveGamesComponent } from './stats/last-five-games/last-five-games.component';
import { StrikersComponent } from './stats/strikers/strikers.component';
import { StatsComponent } from './stats/stats/stats.component';
import { AssistsComponent } from './stats/assists/assists.component';
import { SeasonSummaryComponent } from './stats/season-summary/season-summary.component';
import { OrganizationalChartComponent } from './club/organizational-chart/organizational-chart.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GamePosterComponent } from './games/game-poster/game-poster.component';
import { GamePosterGeneratorComponent } from './games/game-poster-generator/game-poster-generator.component';
import { PosterBaseComponent } from './games/poster-base/poster-base.component';

@NgModule({
  declarations: [
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
    OrganizationalChartComponent,
    LoginComponent,
    GameDetailsComponent,
    GamePosterComponent,
    GamePosterGeneratorComponent,
    PosterBaseComponent
  ],
  imports: [
    AdminRoutingModule,
    ChartsModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class PublicModule {}

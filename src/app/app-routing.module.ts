import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My
import { HomeComponent } from './home/home/home.component';
import { TeamComponent } from './teams/team/team.component';
import { HistoryComponent } from './club/history/history.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LeagueTablePageComponent } from './league-table/league-table-page/league-table-page.component';

// Articles components
import {
  NewArticleComponent,
  EditArticleComponent,
  ArticleComponent
} from './articles';

import { LoginComponent } from './admin/login/login.component';

// Players components
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { PlayerComponent } from './players/player/player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';

import { UploadRankingComponent } from './admin/upload-ranking/upload-ranking.component';
import { ContactComponent } from './club/contact/contact.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';
import { GamesComponent } from './games/games-list/games-list.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { StatsComponent } from './stats/stats/stats.component';
import { EditPlayerStatsComponent } from './strickers/edit-player-stats/edit-player-stats.component';
import { GuideComponent } from './style/guide/guide.component';
import { OrganizationalChartComponent } from './club/organizational-chart/organizational-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'club/history',
    component: HistoryComponent
  },
  {
    path: 'club/organizational-chart',
    component: OrganizationalChartComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/newArticle',
    component: NewArticleComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'editArticle/:id',
    component: EditArticleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/newPlayer',
    component: NewPlayerComponent
  },
  {
    path: 'player/:id',
    component: PlayerComponent
  },
  {
    path: 'editPlayer/:id',
    component: EditPlayerComponent
  },
  {
    path: 'admin/uploadRanking',
    component: UploadRankingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'sponsors',
    component: SponsorComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'league-table',
    component: LeagueTablePageComponent
  },
  {
    path: 'admin/newGame',
    component: NewGameComponent
  },
  {
    path: 'editGame/:id',
    component: EditGameComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'admin/edit-player-stats/:id',
    component: EditPlayerStatsComponent
  },
  {
    path: 'guide',
    component: GuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

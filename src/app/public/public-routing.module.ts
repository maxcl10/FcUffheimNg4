import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My components
import { HomeComponent } from './home/home/home.component';
import { TeamComponent } from './teams/team/team.component';
import { HistoryComponent } from './club/history/history.component';
import { LeagueTablePageComponent } from './league-table/league-table-page/league-table-page.component';
import { ArticleComponent } from './articles/article/article.component';
import { PlayerComponent } from './players/player/player.component';
import { ContactComponent } from './club/contact/contact.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';
import { GamesComponent } from './games/games-list/games-list.component';
import { StatsComponent } from './stats/stats/stats.component';
import { LoginComponent } from './login/login.component';
import { OrganizationalChartComponent } from './club/organizational-chart/organizational-chart.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GamePosterComponent } from './games/game-poster/game-poster.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'team/:id',
    component: TeamComponent,
    data: {
      breadcrumb: 'Home'
    }
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
    path: 'article/:id',
    component: ArticleComponent
  },

  {
    path: 'player/:id',
    component: PlayerComponent
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
    path: 'poster',
    component: GamePosterComponent
  },
  {
    path: 'game/:id',
    component: GameDetailsComponent
  },
  {
    path: 'league-table',
    component: LeagueTablePageComponent
  },

  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

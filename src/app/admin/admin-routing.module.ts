import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { EditPlayerStatsComponent } from './players/edit-player-stats/edit-player-stats.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { UploadRankingComponent } from './upload-ranking/upload-ranking.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { ListGamesComponent } from './games/list-games/list-games.component';
import { EditStrickerComponent } from './players/edit-strickers/edit-strickers.component';
import { NewSponsorComponent } from './sponsors/new-sponsor/new-sponsor.component';
import { ListSponsorsComponent } from './sponsors/list-sponsors/list-sponsors.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'editGame/:id',
        component: EditGameComponent
      },
      {
        path: 'edit-player-stats/:id',
        component: EditPlayerStatsComponent
      },
      {
        path: 'newGame',
        component: NewGameComponent
      },
      {
        path: 'games',
        component: ListGamesComponent
      },
      {
        path: 'articles',
        component: ListArticlesComponent
      },
      {
        path: 'editTeams',
        component: EditTeamComponent
      },
      {
        path: 'newArticle',
        component: NewArticleComponent
      },
      {
        path: 'editArticle/:id',
        component: EditArticleComponent
      },
      {
        path: 'players',
        component: ListPlayersComponent
      },
      {
        path: 'newPlayer',
        component: NewPlayerComponent
      },
      {
        path: 'editPlayer/:id',
        component: EditPlayerComponent
      },
      {
        path: 'uploadRanking',
        component: UploadRankingComponent
      },
      {
        path: 'strickers',
        component: EditStrickerComponent
      },
      {
        path: 'newSponsor',
        component: NewSponsorComponent
      },
      {
        path: 'sponsors',
        component: ListSponsorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

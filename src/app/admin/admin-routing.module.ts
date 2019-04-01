import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { EditPlayerStatsComponent } from './players/edit-player-stats/edit-player-stats.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { LoginComponent } from './login/login.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { UploadRankingComponent } from './upload-ranking/upload-ranking.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
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
    path: 'newArticle',
    component: NewArticleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'editArticle/:id',
    component: EditArticleComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

// Shared
import { SharedModule } from '../shared/shared.module';

// Externals
import { EditorModule } from '@tinymce/tinymce-angular';

// Module components
import { UploadRankingComponent } from './upload-ranking/upload-ranking.component';
import { LoginComponent } from './login/login.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { AdminComponent } from './admin/admin.component';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { EditStrickerComponent } from './players/edit-strickers/edit-strickers.component';
import { NewSponsorComponent } from './new-sponsor/new-sponsor.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { EditPlayerStatsComponent } from './players/edit-player-stats/edit-player-stats.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { NewTeamComponent } from './teams/new-team/new-team.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [SharedModule, FormsModule, EditorModule, AdminRoutingModule],
  declarations: [
    UploadRankingComponent,
    LoginComponent,
    EditTeamComponent,
    AdminComponent,
    NewArticleComponent,
    EditStrickerComponent,
    NewSponsorComponent,
    EditArticleComponent,
    EditGameComponent,
    EditPlayerStatsComponent,
    NewGameComponent,
    NewPlayerComponent,
    EditPlayerComponent,
    NewTeamComponent
  ],
  exports: [RouterModule]
})
export class AdminModule {}

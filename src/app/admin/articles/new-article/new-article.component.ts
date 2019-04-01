import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
// import { TinymceModule } from 'ng2-tinymce-alt';
import { TinymceModule } from 'angular2-tinymce';
// import { CKEditorModule } from 'ng2-ckeditor';

import { AuthenticationService } from '../../../core/authentication.service';
import { Article } from '../../../shared/models/article.model';
import { ArticlesService } from '../../../core/articles.service';

@Component({
  selector: 'fws-new-article',
  templateUrl: './new-article.component.html',
  providers: [ArticlesService, AuthenticationService]
})
export class NewArticleComponent {
  public article: Article;
  public errorMessage: string;
  public successfull: boolean;
  public body: String;

  constructor(
    private articlesService: ArticlesService,
    private authenticationService: AuthenticationService
  ) {
    this.articlesService = articlesService;
    this.article = new Article();
    this.article.published = true;

    this.successfull = false;
  }

  public saveArticle() {
    this.article.userId = this.authenticationService.getLoggedUserId();
    this.articlesService.createArticle(this.article).subscribe(
      article => {
        this.goBack();
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public goBack() {
    window.history.back();
  }

  public descriptionChanged(newDescription) {
    this.article.body = newDescription;
  }
}
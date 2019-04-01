import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/models/article.model';
import { ArticlesService } from '../../../core/articles.service';

@Component({
  selector: 'fws-edit-article',
  templateUrl: './edit-article.component.html',
  providers: [ArticlesService]
})
export class EditArticleComponent implements OnInit {
  public article: Article;
  public errorMessage: string;
  public sub: any;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {
    this.article = new Article();
  }

  public tinyMceSettings = {
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 320,
    plugins: 'fullscreen'
  };

  public getArticle(id: string) {
    this.articlesService.getArticle(id).subscribe(
      article => {
        this.article = article;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public saveArticle() {
    this.articlesService.updateArticle(this.article).subscribe(
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

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number
      this.getArticle(id);
    });
  }
}

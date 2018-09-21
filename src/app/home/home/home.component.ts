import { Component, Output, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Article } from '../../articles/shared/article.model';
import { ArticlesService } from '../../articles/shared/articles.service';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'fws-home',
  templateUrl: './home.component.html',
  providers: [ArticlesService]
})
export class HomeComponent implements OnInit {
  public articles: Article[];
  public loaded = false;
  public errorMessage: string;
  public imageUrl: string;

  constructor(
    private articlesService: ArticlesService,
    private titleService: Title
  ) {}

  public getArticles() {
    this.articlesService.getArticles().subscribe(
      articles => {
        this.articles = articles.filter(o => o.published);
        this.loaded = true;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public ngOnInit() {
    this.titleService.setTitle(
      AppConfig.settings.properties.siteName + ' - Site officiel'
    );
    this.imageUrl = AppConfig.settings.properties.homeImageUrl;

    this.getArticles();
  }
}

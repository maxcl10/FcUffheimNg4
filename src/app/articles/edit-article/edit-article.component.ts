import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticlesService } from '../shared/index';

@Component({
    selector: 'edit-article',
    templateUrl: './edit-article.component.html',
    providers: [ArticlesService],
})

export class EditArticleComponent implements OnInit {

    public article: Article;
    public errorMessage: string;
    public sub: any;

    constructor(private articlesService: ArticlesService, private route: ActivatedRoute) {
        this.article = new Article();
    }

    public getArticle(id: string) {
        this.articlesService.getArticle(id).subscribe(
            (article) => {
                this.article = article;
            },
            (error) => this.errorMessage = <any> error);
    }

    public saveArticle() {
        this.articlesService.updateArticle(this.article).subscribe(
            (article) => {
                this.goBack();
            },
            (error) => this.errorMessage = <any> error);
    }

    public goBack() {
        window.history.back();
    }

    public descriptionChanged(newDescription) {
        this.article.body = newDescription;
    }

    public ngOnInit() {

        this.sub = this.route.params.subscribe((params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.getArticle(id);
        });
    }
}

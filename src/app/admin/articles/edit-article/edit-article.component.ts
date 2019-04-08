import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/models/article.model';
import { ArticlesService } from '../../../core/services/articles.service';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'fws-edit-article',
  templateUrl: './edit-article.component.html',
  providers: [ArticlesService]
})
export class EditArticleComponent implements OnInit {
  public article: Article;
  public errorMessage: string;
  public title: string;
  modalRef: BsModalRef;

  public tinyMceSettings = {
    inline: false,
    statusbar: false,
    browser_spellcheck: false,
    height: 400,
    plugins: `fullscreen advlist autolink lists link image charmap print preview anchor textcolor
      searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste code help wordcount`,
    toolbar: `formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter
      | link image media pageembed | alignleft aligncenter alignright alignjustify  |
      numlist bullist outdent indent | removeformat | addcomment`
  };

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private modalService: BsModalService
  ) {}

  public ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== '0') {
        this.title = 'Editer';
        this.getArticle(id);
      } else {
        this.title = 'Ajouter';
        this.article = new Article();
      }
    });
  }

  public getArticle(id: string) {
    this.articlesService.getArticle(id).subscribe(
      article => {
        this.article = article;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  public createArticle() {
    this.article.userId = this.authenticationService.getLoggedUser().userId;
    this.articlesService.createArticle(this.article).subscribe(
      article => {
        this.goBack();
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

  public deleteArticle() {
    this.articlesService.deleteArticle(this.article.id).subscribe(
      result => {
        this.goBack();
        this.modalRef.hide();
      },
      error => (this.errorMessage = <any>error)
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public cancel() {
    this.modalRef.hide();
  }

  public goBack() {
    window.history.back();
  }
}

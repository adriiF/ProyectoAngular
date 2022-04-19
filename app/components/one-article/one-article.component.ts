import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/services/aricle.service';
import { Global } from 'src/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css'],
  providers: [ArticleService],
})
export class OneArticleComponent implements OnInit {
  public article: Article;

  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
    this.article = new Article('', '', '', 'null', 'null');
  }

  ngOnInit(): void {
  
    //recoger datos de la url
   /* this._route.params.subscribe((params) => {
      let id = params['id'];
      console.log(id);

      //llamo al servicio
      this._articleService.getArticles(id).subscribe(
        (response) => {
          if (response.article) {
            this.article = response.article;
            console.log('existo');
            console.log(this.article);
          } else {
            this._router.navigate(['/blog/articulo', id]);
          }
        },
        (error) => {
          console.log('estoy en el error');
          this._router.navigate(['/formulario']);
        }
      );
    });*/
    this.getArticle();
  }
  getArticle(){
    this._route.params.subscribe(params=>{
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response =>{
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error =>{
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id: any){
    this._articleService.delete(id).subscribe(
      response=>{
       this._router.navigate(['/blog']);
      },
      error=>{
        console.log(error);
        this._router.navigate(['/blog']);
      }
    );
  }
}

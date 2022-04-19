import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/aricle.service';
import { Article } from 'src/app/models/article';

import { Global } from 'src/services/global';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public homeText = 'Desarrollo web';
  public articles: Article[];
  public subtitulo= "últimos Articulos"
 
public url: string;

  constructor( private _articleService: ArticleService) 
  
  { 
    this.articles=[];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response =>{
         if(response.articles){
           this.articles= response.articles;
           console.log(this.articles)
         }else{

         }
      },
      error =>{
         console.log(error);
      }
 );
  }

}

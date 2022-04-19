import { Component, OnInit} from '@angular/core';
import { ArticleService } from 'src/services/aricle.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  

public title = "'Bienvenido al blog'";
public subtitulo= "Articulos"

afuConfig = {
  uploadAPI: {
    url:"https://example-file-upload-api"
  }}

public articles: Article[];
public url: string;
  constructor(

 private _articleService: ArticleService

  ) {
    this.articles=[];
   this.url = Global.url;

   }

  ngOnInit(): void {
  this._articleService.getArticles().subscribe(
        response =>{
           if(response.articles){
             this.articles= response.articles;
           }else{

           }
        },
        error =>{
           console.log(error);
        }
   );
  }

}

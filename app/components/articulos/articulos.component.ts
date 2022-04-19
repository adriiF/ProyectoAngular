import { Component, OnInit ,Input} from '@angular/core';
import { ArticleService } from 'src/services/aricle.service';
import { Article } from 'src/app/models/article';

import { Global } from 'src/services/global';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
  providers: [ArticleService]
})
export class ArticulosComponent implements OnInit {

 @Input() articles: Article[];
 @Input()  url: string;
 @Input() SegundoTitulo:string;



  constructor(
    private _articleService: ArticleService

  ) { 
    this.articles=[];
    this.url = Global.url;
    this.SegundoTitulo =""
  


  }

  ngOnInit(): void {
   console.log(this.articles);
  }

}

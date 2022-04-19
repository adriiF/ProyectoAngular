import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/services/aricle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
public homeText = "Busqueda:";
public articles : Article[];
public tituloDeBusqueda: String;
  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _articleService: ArticleService

  ) { 
    this.articles=[];
    this.tituloDeBusqueda="";
  }

  ngOnInit(): void {
this._route.params.subscribe(params =>{
  var search = params['search'];
  this.tituloDeBusqueda=search;
 /* alert(search);*/
 this._articleService.search(search).subscribe(
    response =>{
   /*  console.log(response);*/
   if(response.articles){
     this.articles = response.articles;
     
   }
console.log(this.articles);
    },
    error =>{
         console.log(error);
         this.articles=[];
         
    }
 );
})

  }

}

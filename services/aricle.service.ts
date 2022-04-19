import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Article } from "src/app/models/article";
import { Global } from "./global";
import { ThrowStmt } from "@angular/compiler";



@Injectable()
export class ArticleService {

    public url: string;
    
    

    constructor(
        private _http: HttpClient
    ){
this.url= Global.url;
    }

    pruebas(){
        console.log("soy el servicio de articulo");
    }

    //listado de articulos
    getArticles(last:any = null):Observable<any>{
        var articles = 'articles';
        if(last != null){
     articles = 'articles/true';
 }

         return this._http.get(this.url+articles);
    }
    getArticle(articleId : any):Observable<any>{
        return this._http.get(this.url+'article/'+ articleId);
    }
search(searchString : any):Observable<any>{
    return this._http.get(this.url+'search/'+ searchString);
}
create(article : Article) :Observable<any>{
 let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'save', params,{headers:headers});
    
   /* return this._http.post(this.url+'save', article);*/
}
update(id:string, article:Article):Observable<any>{
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'article/'+id, params, {headers:headers})
}

delete(id:string):Observable<any>{
    
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+'article/'+id,{headers:headers});
}
}
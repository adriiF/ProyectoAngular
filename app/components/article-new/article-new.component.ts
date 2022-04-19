import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/services/aricle.service';
import { Global } from 'src/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
   public article: Article;
   public status : string;
   public url:string;
   public page_title: string;
   public is_edit: boolean=true;
   
   
   /*public url:string;*/
  
   afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png .gig .jpeg",
    maxSize: 50,
    uploadAPI:  {
      url:Global.url+'upload-image/',

    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex:true,
    autoUpload:false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen de tu articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};
  constructor(
  private _articleService: ArticleService,
  private _route: ActivatedRoute,
  private _router:Router,
    
  ) { 
   this.article=new Article('','','','null','null');
   this.status="";
   this.url = Global.url;
   this.page_title="Nuevo artículo"
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.article);
    this._articleService.create(this.article).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status='success';
          this.article = response.article;
         /* console.log(response);*/
         this._router.navigate(['/blog']);

        }else{
          this.status='error';
        }

      },
      error=>{
        console.log(error);
        this.status='error';
      }
    )
  }
  imageUpload(data :any){

    console.log("hola");
/*var image_data = JSON.parse(data.response);

console.log(image_data.image)
alert(image_data.image);
this.article.image = image_data.image;*/

  this.article.image = data.body.image;

  }

}

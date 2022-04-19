import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';



import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { AsideComponent } from './components/aside/aside.component';

import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';

import { EsParPipe } from './pipes/espar.pipe';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AsideBlogComponent } from './components/aside-blog/aside-blog.component';
import { OneArticleComponent } from './components/one-article/one-article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';

import { ArticleEditComponent } from './components/article-edit/article-edit.component';


@NgModule({
  declarations: [
    AppComponent,
  
 
   
    HeaderComponent,
    BannerComponent,
    CardComponent,
    AsideComponent,
    
    FooterComponent,
    BlogComponent,
    HomeComponent,
    FormularioComponent,
    ContactoComponent,
    ErrorComponent,
    EsParPipe,
    ArticulosComponent,
    AsideBlogComponent,
    OneArticleComponent,
    SearchComponent,
    ArticleNewComponent,
   
    ArticleEditComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

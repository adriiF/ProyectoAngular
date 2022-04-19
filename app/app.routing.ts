//importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes a los cuales quiero hacer una página exclusiva

import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { AsideBlogComponent } from "./components/aside-blog/aside-blog.component";
import { ErrorComponent } from "./components/error/error.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { OneArticleComponent } from "./components/one-article/one-article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";
//Arry de rutas
const appRoutes: Routes = [
{path: '',component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent},
{path: 'blog/articulo/:id', component: OneArticleComponent },
{path: 'blog/crear', component: ArticleNewComponent },
{path: 'blog/editar/:id', component: ArticleEditComponent },
{path: 'buscar/:search', component: SearchComponent},
/*{path: 'formulario', component: FormularioComponent},*/
{path: 'contacto', component: ContactoComponent},
/*{path: 'contacto/:nombre/:apellidos', component: ContactoComponent},*/

{path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
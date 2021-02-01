import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NuevaRecetaComponent } from './nueva-receta/nueva-receta.component';
import { RecetaComponent } from './receta/receta.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inicio_sesion', component: InicioSesionComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'nueva_receta', component: NuevaRecetaComponent },
  { path: 'receta', component: RecetaComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

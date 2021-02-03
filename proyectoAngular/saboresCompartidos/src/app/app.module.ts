import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    ContactComponent,
    InicioSesionComponent,
    NoticiaComponent,
    NoticiasComponent,
    NuevaRecetaComponent,
    RecetaComponent,
    RecetasComponent,
    RegistroComponent,
    FooterComponent,
    HeaderComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

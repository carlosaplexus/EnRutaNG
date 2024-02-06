import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path:'Inicio',component:InicioComponent, data: {animation: 'PaginaInicio'}},
  { path:'Contacto',component:ContactoComponent, data: {animation: 'PaginaContacto'}},
  { path:'',redirectTo:'/Inicio',pathMatch:'full'},
  { path:'**',component:PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoMarcaComponent } from './catalogo-marca/catalogo-marca.component';
import { NuevoMarcaComponent } from './nuevo-marca/nuevo-marca.component';
import { BuscarMarcaComponent } from './buscar-marca/buscar-marca.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EliminarMarComponent } from './eliminar-mar/eliminar-mar.component';
import { MainMarComponent } from './main-mar/main-mar.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ActualizarMarComponent } from './actualizar-mar/actualizar-mar.component';



@NgModule({
  declarations: [
    CatalogoMarcaComponent,
    NuevoMarcaComponent,
    BuscarMarcaComponent,
    EliminarMarComponent,
    MainMarComponent,
    MarcasComponent,
    ActualizarMarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class MarcaModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { NuevoProductosComponent } from './nuevo-productos/nuevo-productos.component';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { RouterModule } from '@angular/router';
import { EliminarComponent } from './eliminar/eliminar.component';
import { MainComponent } from './main/main.component';
import { ProductoComponent } from './producto/producto.component';
import { ActualizarComponent } from './actualizar/actualizar.component';


@NgModule({
  declarations: [
    CatalogoProductosComponent,
    NuevoProductosComponent,
    BuscarProductosComponent,
    EliminarComponent,
    MainComponent,
    ProductoComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NuevoProductosComponent
  ]
})
export class ProductosPAPEModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// rutas de productos
import { NuevoProductosComponent } from './productos-pape/nuevo-productos/nuevo-productos.component';
import { CatalogoProductosComponent } from './productos-pape/catalogo-productos/catalogo-productos.component';
import { BuscarProductosComponent } from './productos-pape/buscar-productos/buscar-productos.component';
import { EliminarComponent } from './productos-pape/eliminar/eliminar.component';
import { MainComponent } from './productos-pape/main/main.component';
// rutas proveedores
import { NuevoProveedoresComponent } from './proveedores/nuevo-proveedores/nuevo-proveedores.component';
import { CatalogoProveedoresComponent } from './proveedores/catalogo-proveedores/catalogo-proveedores.component';
import { BuscarProveedoresComponent } from './proveedores/buscar-proveedores/buscar-proveedores.component';
import { EliminarProComponent } from './proveedores/eliminar-pro/eliminar-pro.component';
import { MainProComponent } from './proveedores/main-pro/main-pro.component';
// rutas marca
import { NuevoMarcaComponent } from './marca/nuevo-marca/nuevo-marca.component';
import { CatalogoMarcaComponent } from './marca/catalogo-marca/catalogo-marca.component';
import { BuscarMarcaComponent } from './marca/buscar-marca/buscar-marca.component';
import { EliminarMarComponent } from './marca/eliminar-mar/eliminar-mar.component';
import { MainMarComponent } from './marca/main-mar/main-mar.component';

const routes: Routes = [
  {
    path:'productosCatalogo',
    component:CatalogoProductosComponent
  },
  {
    path:'productosNuevo',
    component:NuevoProductosComponent
  },
  {
    path:'productosBuscar',
    component:BuscarProductosComponent
  },
  /*rutas de proveedores*/
  {
    path:'proveedorNuevo',
    component:NuevoProveedoresComponent
  },
  {
    path:'proveedorCatalogo',
    component:CatalogoProveedoresComponent
  },
  {
    path:'proveedorBuscar',
    component:BuscarProveedoresComponent
  },
  {
    path:'proveedorEliminar/:id',
    component:EliminarProComponent
  },
  {
    path:'mainP',
    component:MainProComponent
  },

  /*Rutas de marca*/
  {
    path:'marcaNuevo',
    component:NuevoMarcaComponent
  },
  {
    path:'marcaBusquedad',
    component:BuscarMarcaComponent
  },
  {
    path:'marcaCatalogo',
    component:CatalogoMarcaComponent
  },
  {
    path:'marcaEliminar/:id',
    component:EliminarMarComponent
  },
  {
    path:'mainMar',
    component:MainMarComponent
  },
  //ruta productoseliminar
  {
    path:'productoseliminar/:id',
    component:EliminarComponent
  },
  //ruta actualizar producto
  {
    path:'main',
    component:MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

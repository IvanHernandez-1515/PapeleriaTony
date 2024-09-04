import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CatalogoProveedoresComponent } from './catalogo-proveedores/catalogo-proveedores.component';
import { NuevoProveedoresComponent } from './nuevo-proveedores/nuevo-proveedores.component';
import { BuscarProveedoresComponent } from './buscar-proveedores/buscar-proveedores.component';
import { RouterModule } from '@angular/router';
import { EliminarProComponent } from './eliminar-pro/eliminar-pro.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { MainProComponent } from './main-pro/main-pro.component';
import { ActualizarProComponent } from './actualizar-pro/actualizar-pro.component';



@NgModule({
  declarations: [
    CatalogoProveedoresComponent,
    NuevoProveedoresComponent,
    BuscarProveedoresComponent,
    EliminarProComponent,
    ProveedorComponent,
    MainProComponent,
    ActualizarProComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProveedoresModule { }

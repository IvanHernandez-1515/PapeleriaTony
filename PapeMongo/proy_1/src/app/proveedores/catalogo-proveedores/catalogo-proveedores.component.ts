import { Component } from '@angular/core';
import { ProveedorService } from 'src/app/serviciosPro/proveedor.service';
@Component({
  selector: 'app-catalogo-proveedores',
  templateUrl: './catalogo-proveedores.component.html',
  styleUrls: ['./catalogo-proveedores.component.css']
})
export class CatalogoProveedoresComponent {
miProv: any;
  constructor(private servicioProv:ProveedorService ){}

  Provedoreslista:any=[]
  ngOnInit():void{
    this.servicioProv.Obtener_todos_prov()
    .subscribe(data=>{
      console.log(data)
      this.Provedoreslista=data
    })
  }
}

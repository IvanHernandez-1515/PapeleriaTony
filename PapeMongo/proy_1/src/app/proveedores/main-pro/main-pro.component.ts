import { Component,OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/serviciosPro/proveedor.service';
import { Proveedores } from 'src/app/modelosPro/modelo';

@Component({
  selector: 'app-main-pro',
  templateUrl: './main-pro.component.html',
  styleUrls: ['./main-pro.component.css']
})
export class MainProComponent implements OnInit{

  constructor (private serviciosProv: ProveedorService){}

  actualizar:boolean=false
  miProv:any

  listaProv : Proveedores []=[]
  //mandamos a llamar todos los productos
  ngOnInit(): void {
    this.serviciosProv.Obtener_todos_prov()
    .subscribe(data=>{
      console.log(data)
      this.listaProv= data
    })
  }

  recibirProveedor(seleccionado:Proveedores){
    console.log("recibido",seleccionado)

    this.miProv=seleccionado

    this.actualizar=true
  }

}


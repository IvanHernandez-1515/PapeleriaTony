import { Component,OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
//importando el servicio de productos
import { Categoria, Modelo, Productos } from 'src/app/modelos/modelo';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  //importamos el servicio de productos en el constructor
  constructor (private serviciosProd: ProductosService){}

  actualizar:boolean=false
  miProd:any

  miModelo:Modelo={
    nombre:'',
    descripcion:''
  }
  miCat:Categoria={
    nombre:'',
    descripcion:''
  }

  listaProds : Productos []=[]
  //mandamos a llamar todos los productos
  ngOnInit(): void {
    this.serviciosProd.Obtener_todos()
    .subscribe(data=>{
      console.log(data)
      this.listaProds= data
    })
  }

  recibirProducto(seleccionado:Productos){
    console.log("recibido",seleccionado)

    this.miProd=seleccionado
   this.miModelo.descripcion=seleccionado.modelo?.descripcion
   this.miModelo.nombre=seleccionado.modelo?.nombre

   this.miCat.descripcion=seleccionado.categoria?.descripcion
   this.miCat.nombre=seleccionado.categoria?.nombre
    this.actualizar=true
  }
}

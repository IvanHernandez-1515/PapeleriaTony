//importamos el OnInit y INPUT además del modelo de productos y sus derivados
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Productos,Categoria,Modelo } from 'src/app/modelos/modelo';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  constructor() { }
  miCat:Categoria={
    nombre:'',
    descripcion:''
  }
  miModelo:Modelo={
    nombre:'',
    descripcion:''
  }
  //Creacion de la variable de entrada: prod de tipo producto(el que importamos de modelo)
  @Input() miProd:Productos={
    clave: '',
    nombre: '',
    costo: 0,
    color: '',
    descripcion: '',
    fecha_ad: new Date(),
    foto: null,
    status: '',
    origen: '',
    categoria: this.miCat,
    medida: '',
    modelo: this.miModelo,
    Categoria: undefined,
    Modelo: undefined
  }
  ngOnInit(): void {
  }

  // variable de salida: prodSeleccionado que almacena el producto que lanzó el evento
  @Output() prodSeleccionado=new EventEmitter<Productos>()

  enviarProd_seleccionado(p:Productos){
    console.log("seleccionado",p)
    this.prodSeleccionado.emit(p)
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit{
  constructor(private servicioProd:ProductosService){}
  listaProds:any=[]
  ngOnInit(): void {
    this.servicioProd.Obtener_todos()
    .subscribe(data=>{
      console.log(data)
      this.listaProds=data
    })
  }

}

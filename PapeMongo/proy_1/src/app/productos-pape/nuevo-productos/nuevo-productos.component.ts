import { Component,OnInit } from '@angular/core';
import { Categoria,Modelo,Productos } from 'src/app/modelos/modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-nuevo-productos',
  templateUrl: './nuevo-productos.component.html',
  styleUrls: ['./nuevo-productos.component.css']
})
export class NuevoProductosComponent implements OnInit {
  imagen:any = null;
  messageErr =null;

  miCat:Categoria={
    nombre:'',
    descripcion:''
  }
  miModelo:Modelo={
    nombre:'',
    descripcion:''
  }
  miProd:Productos={
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

  res:any
  constructor(private servicioProd:ProductosService){}
  ngOnInit():void{
  }

  convertir_a_B64(event:any){
    if(event.target.files && event.target.files[0]){
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen = reader.result;
      reader.readAsDataURL(file);
    }
  }

  enviarProd():void{
    this.miProd.foto = this.imagen
    console.log(this.miProd.foto)
    console.log(this.miProd)
    console.log(this.miCat)
    console.log(this.miModelo)
  try{
    this.res = this.servicioProd.nuevo_prod(this.miProd)
    .subscribe(() => console.log((this.res)))
      } catch(error:any){
        this.messageErr = error.error.message
    }
  }
}



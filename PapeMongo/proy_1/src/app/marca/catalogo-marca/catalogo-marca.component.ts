import { Component,OnInit } from '@angular/core';
import { MarcaService } from 'src/app/serviciosMar/marca.service';

@Component({
  selector: 'app-catalogo-marca',
  templateUrl: './catalogo-marca.component.html',
  styleUrls: ['./catalogo-marca.component.css']
})
export class CatalogoMarcaComponent {
  constructor(private servicioMarca:MarcaService ){}

  listaMarca:any=[]
  ngOnInit():void{
    this.servicioMarca.Obtener_Marca()
    .subscribe(data=>{
      console.log(data)
      this.listaMarca=data
    })
  }
}



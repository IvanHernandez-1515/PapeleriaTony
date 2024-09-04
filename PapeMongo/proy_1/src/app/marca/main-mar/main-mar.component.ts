import { Component } from '@angular/core';
import { MarcaService } from 'src/app/serviciosMar/marca.service';
import { Marca } from 'src/app/modeloMarca/modelo';

@Component({
  selector: 'app-main-mar',
  templateUrl: './main-mar.component.html',
  styleUrls: ['./main-mar.component.css']
})
export class MainMarComponent {
  constructor (private serviciosMarca: MarcaService){}

  actualizar:boolean=false
  miMarca:any

  listaMarca : Marca []=[]
  //mandamos a llamar todos los productos
  ngOnInit(): void {
    this.serviciosMarca.Obtener_Marca()
    .subscribe(data=>{
      console.log(data)
      this.listaMarca= data
    })
  }

  recibirMarcas(seleccionado:Marca){
    console.log("recibido",seleccionado)

    this.miMarca=seleccionado

    this.actualizar=true
  }

}


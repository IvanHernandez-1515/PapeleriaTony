import { Component,OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Marca } from 'src/app/modeloMarca/modelo';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit{
constructor(){ }
@Input() miMarca:Marca={
  marca:'',
  logotipo:null,
  numero:0,
}
ngOnInit(): void {
}
@Output() marcaSeleccionado=new EventEmitter <Marca>()

enviarMarca_seleccionado(m:Marca){
  console.log("seleccionado",m)
  this.marcaSeleccionado.emit(m)
}
}

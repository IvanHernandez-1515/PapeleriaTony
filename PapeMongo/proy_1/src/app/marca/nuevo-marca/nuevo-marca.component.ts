import { Component } from '@angular/core';
import { Marca } from 'src/app/modeloMarca/modelo';
import { MarcaService } from 'src/app/serviciosMar/marca.service';

@Component({
  selector: 'app-nuevo-marca',
  templateUrl: './nuevo-marca.component.html',
  styleUrls: ['./nuevo-marca.component.css']
})
export class NuevoMarcaComponent {
  imagen:any = null;
  messageErr =null;

  miMarca:Marca={
    marca:'',
    logotipo:null,
    numero:0,
  }
  res:any
  constructor(private servicioMarca:MarcaService){}
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

  enviarMarca():void{
    this.miMarca.logotipo = this.imagen
    console.log(this.miMarca.logotipo)
    console.log(this.miMarca)
  try{
    this.res = this.servicioMarca.nuevo_Marca(this.miMarca)
    .subscribe(() => console.log((this.res)))
      } catch(error:any){
        this.messageErr = error.error.message
    }
  }
}


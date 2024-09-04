import { Component,OnInit,Input} from '@angular/core';
import { MarcaService } from 'src/app/serviciosMar/marca.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-mar',
  templateUrl: './actualizar-mar.component.html',
  styleUrls: ['./actualizar-mar.component.css']
})
export class ActualizarMarComponent implements OnInit{
  @Input() mar:any
  constructor (private ruta:Router,private servicioMarca:MarcaService) {}
  actualizar:boolean=false
  imagen:any = null;
  messageErr = null;
  res:any

  miMarca:any
  marcaId:string=""

  ngOnInit(): void {
    console.log("recibido en actualizar",this.mar)
  }
  actualizarMarca(){
    this.mar.logotipo=this.imagen
    this.marcaId=this.mar._id.$oid
    this.mar.id=this.marcaId
    console.log("actualizar en BD",this.mar)
  try{
    this.res=this.servicioMarca.actualizarMarca(this.mar)
    .subscribe(data=>{
      console.log(data)})
      this.actualizar=false
      this.alerta()
  }
  catch(erro:any){
    this.messageErr=erro.erro.message
  }
  }
  convertir_a_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen = reader.result;
      reader.readAsDataURL(file);
    }
}
  alerta(){
    Swal.fire(
      'El producto fue',
      ' actualizado',
      'success'
    )
    this.ruta.navigate(['/marcaCatalogo'])
  }
}

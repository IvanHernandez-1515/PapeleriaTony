import { Component, OnInit,Input} from '@angular/core';
import { ProveedorService } from 'src/app/serviciosPro/proveedor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pro',
  templateUrl: './actualizar-pro.component.html',
  styleUrls: ['./actualizar-pro.component.css']
})
export class ActualizarProComponent implements OnInit{
  @Input() provee:any
  constructor(private ruta:Router,private servicioProv:
    ProveedorService){}
    actualizar:boolean=false
    messageErr=null;
    res:any

    miProv:any
    provId:string=""
    ngOnInit():void{
      console.log("recibido en actualizar",this.provee)
    }
    actualizarProv(){
      this.provId=this.provee._id.$oid
      this.provee.id=this.provId
      console.log("actualizar en BD",this.provee)

    try{
      this.res=this.servicioProv.actualizarProv(this.provee)
      .subscribe(data=>{
        console.log(data)})
        this.actualizar=false
        this.alerta()
    }
    catch(error:any){
            this.messageErr=error.error.message
    }
    }
    alerta(){
      Swal.fire(
        'El proveedor fue',
        'actualizado',
        'success'
      )
      this.ruta.navigate(['/proveedorCatalogo'])
    }
}

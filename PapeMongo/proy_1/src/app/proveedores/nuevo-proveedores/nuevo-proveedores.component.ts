import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Proveedores } from 'src/app/modelosPro/modelo';
import { ProveedorService } from 'src/app/serviciosPro/proveedor.service';
@Component({
  selector: 'app-nuevo-proveedores',
  templateUrl: './nuevo-proveedores.component.html',
  styleUrls: ['./nuevo-proveedores.component.css']
})
export class NuevoProveedoresComponent implements OnInit{

  messageErr= null;
  miProv:Proveedores={
  rfc:'',
  estatus:'',
  nomEmpresa:'',
  paginaWEB:'',
  representante:'',
  telProveedor:'',
  fecha_registro:new Date(),
  usuarioid:0,
  }

  res:any
  constructor(private servicioProv:ProveedorService) {}
  ngOnInit(): void {

  }
  enviarProv():void{
    console.log(this.miProv)
  try{
    this.res = this.servicioProv.nuevo_prov(this.miProv)
    .subscribe(() => console.log((this.res)))
      } catch(error:any){
        this.messageErr = error.error.message
    }
  }
}

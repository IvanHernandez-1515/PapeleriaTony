import { Component,OnInit,Input,Output, EventEmitter} from '@angular/core';
import { Proveedores } from 'src/app/modelosPro/modelo';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit{
  constructor(){ }
  @Input()prov:Proveedores={
    rfc:'',
    estatus:'',
    nomEmpresa:'',
    paginaWEB:'',
    representante:'',
    telProveedor:'',
    fecha_registro:new Date(),
    usuarioid:0,
    }

    ngOnInit(): void {
    }
    @Output() provSeleccionado=new EventEmitter<Proveedores>
    enviarProv_seleccionado(p:Proveedores){
      console.log("seleccionado",p)
      this.provSeleccionado.emit(p)
    }
}

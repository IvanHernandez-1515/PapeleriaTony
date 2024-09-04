import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProveedorService } from 'src/app/serviciosPro/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-pro',
  templateUrl: './eliminar-pro.component.html',
  styleUrls: ['./eliminar-pro.component.css']
})
export class EliminarProComponent implements OnInit {
  provId: string | null=null;

  constructor(private ruta: Router,
              private router: ActivatedRoute,
              private servicioProv: ProveedorService) { }

  ngOnInit(): void {
    this.provId = this.router.snapshot.paramMap.get('id');
    console.log(this.provId);
    this.eliminar()

  }
  res:any
  messageErr:any
  eliminar(){
    try {
      this.res=this.servicioProv.eliminar(this.provId)
      .subscribe(data=>{
        console.log(data)})
        this.alerta()
        //redirecciona para cargar el componente catálogo
        this.ruta.navigate(['/proveedorCatalogo'])
       }
    catch(error: any) {
          this.messageErr = error.error.message
        }
    }

    alerta(){
      Swal.fire(
        'El producto fue',
        ' eliminado',
        'success'
      )
      this.ruta.navigate(['/proveedorCatalogo'])
    }

  }


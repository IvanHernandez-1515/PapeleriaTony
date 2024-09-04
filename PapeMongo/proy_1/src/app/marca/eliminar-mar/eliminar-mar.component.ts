import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MarcaService } from 'src/app/serviciosMar/marca.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-eliminar-mar',
  templateUrl: './eliminar-mar.component.html',
  styleUrls: ['./eliminar-mar.component.css']
})
export class EliminarMarComponent implements OnInit {
  marcaId: string | null=null;

  constructor(private ruta: Router,
              private router: ActivatedRoute,
              private servicioMarca: MarcaService) { }

  ngOnInit(): void {
    this.marcaId = this.router.snapshot.paramMap.get('id');
    console.log(this.marcaId);
    this.eliminar()

  }
  res:any
  messageErr:any
  eliminar(){
    try {
      this.res=this.servicioMarca.eliminar(this.marcaId)
      .subscribe(data=>{
        console.log(data)})
        this.alerta()
        //redirecciona para cargar el componente catálogo
        this.ruta.navigate(['/marcaCatalogo'])
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
      this.ruta.navigate(['/marcaCatalogo'])
    }

  }



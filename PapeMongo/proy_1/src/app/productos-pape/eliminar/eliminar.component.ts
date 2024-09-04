import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{
  prodId: string | null=null;

  constructor(private ruta: Router,
              private router: ActivatedRoute,
              private servicioProd: ProductosService) { }

  ngOnInit(): void {
    this.prodId = this.router.snapshot.paramMap.get('id');
    console.log(this.prodId);
    this.eliminar()

  }
  res:any
  messageErr:any
  eliminar(){
    try {
      this.res=this.servicioProd.eliminar(this.prodId)
      .subscribe(data=>{
        console.log(data)})
        this.alerta()
        //redirecciona para cargar el componente catálogo
        this.ruta.navigate(['/productosCatalogo'])
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
      this.ruta.navigate(['/productosCatalogo'])
    }

  }






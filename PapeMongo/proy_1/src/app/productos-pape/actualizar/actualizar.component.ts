import { Component,OnInit,Input } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  @Input() product:any
  constructor(private ruta:Router, private servicioProd:ProductosService){}
  actualizar:boolean=false
  imagen: any = null;
  messageErr = null;
  res:any
  miProd:any
  prodId:string=""

  ngOnInit(): void {
     console.log("recibido en actualizar", this.product)
    }

  actualizarProd(){
    this.product.foto=this.imagen
    this.prodId=this.product._id.$oid
    this.product.id=this.prodId
    console.log("actualizar en BD",this.product)

    try {
          this.res=this.servicioProd.actualizarProd(this.product)
          .subscribe(data=>{
            console.log(data)})
            this.actualizar=false
            this.alerta()
          }
    catch(error: any) {
              this.messageErr = error.error.message
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
        this.ruta.navigate(['/productosCatalogo'])
      }

}

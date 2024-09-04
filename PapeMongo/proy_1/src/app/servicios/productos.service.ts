import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Productos } from '../modelos/modelo';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url='http://localhost:4000/';
  private httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http: HttpClient) { }

  //obtener todos los productos de productomodelo
  Obtener_todos(){
    return this.http.get<Productos[]>("http://localhost:4000/productos/todos")
  }
  nuevo_prod(info:Productos){
    return this.http.post<Productos>(this.url+"/prod/insertando", info, this.httpOptions);
  }
  eliminar(id: string | null){
    return this.http.delete<any>(`${this.url}/prod/elminando/${id}`);
  }
  actualizarProd(info:Productos){
    return this.http.put<Productos>(this.url+"/productos/utpdate",info,this.httpOptions);
  }
}


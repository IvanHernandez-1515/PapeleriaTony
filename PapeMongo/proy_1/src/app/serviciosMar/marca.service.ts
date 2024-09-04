import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Marca } from '../modeloMarca/modelo';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url='http://localhost:4000';
  private httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http: HttpClient) { }
  //obtener todos los productos de productomodelo
  Obtener_Marca(){
    return this.http.get<any[]>("http://localhost:4000/marcas/todos")
  }
  nuevo_Marca(info:Marca){
    return this.http.post<Marca>(this.url+"/marca/insertando", info, this.httpOptions);
  }
  eliminar(id: string | null){
    return this.http.delete<any>(`${this.url}/marca/eliminando/${id}`);
  }
  actualizarMarca(info:Marca){
    return this.http.put<Marca>(this.url+"/marcas/actualizar",info,this.httpOptions);
  }
}



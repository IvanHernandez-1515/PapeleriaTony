import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Proveedores } from '../modelosPro/modelo';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private url='http://localhost:4000';
  private httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http: HttpClient) { }
  Obtener_todos_prov(){
    return this.http.get<any[]>("http://localhost:4000/prove/todos")
  }
  nuevo_prov(info:Proveedores){
    return this.http.post<Proveedores>(this.url+"/prove/insertando", info, this.httpOptions);
  }
  eliminar(id: string | null){
    return this.http.delete<any>(`${this.url}/prove/elminando/${id}`);
  }
  actualizarProv(info:Proveedores){
    return this.http.put<Proveedores>(this.url+"/prove/actualizar",info,this.httpOptions);
  }
}


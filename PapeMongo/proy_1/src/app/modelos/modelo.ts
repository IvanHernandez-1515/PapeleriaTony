//creamos la lista de productos con sus parametros en mongo
export class Productos{
  clave?:string;
  nombre?:string;
  costo?:number;
  precio?:number;
  color?:string;
  descripcion?:string;
  fecha_ad:Date = new Date(2023, 2, 2, 17, 23, 42, 11);
  foto?: null;
  archivoFoto?:File | null;
  origen?:string;
  status?:string;
  categoria?:Categoria;
  medida?:string;
  modelo?:Modelo;
  Categoria: any;
  Modelo: any;
}
export class Categoria{
  nombre?:string;
  descripcion?:string;
}
export class Modelo{
  nombre?:string;
  descripcion?:string;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoProducto } from '../model/tipoproducto.model';

@Injectable({
  providedIn: 'root'
})
export class TipoproductoService {

  constructor(private http: HttpClient) { }
  getAllTipoProductos(){
    return this.http.get<TipoProducto[]>('http://localhost:3000/api/v1/tipoproducts');
  }
}

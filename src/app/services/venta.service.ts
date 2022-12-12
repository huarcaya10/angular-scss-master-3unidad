import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../model/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }
  getAllVentas(){
    return this.http.get<Sale[]>('http://localhost:3000/api/v1/ventas');
  }
}

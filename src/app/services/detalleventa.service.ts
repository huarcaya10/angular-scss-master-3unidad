import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailSale } from '../model/detalleVenta.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleventaService {

  constructor(private http: HttpClient) { }

  getAllDetalleVentas(){
    return this.http.get<DetailSale[]>('http://localhost:3000/api/v1/detalles');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../model/pago.model';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) { }
  getAllPagos(){
    return this.http.get<Payment[]>('http://localhost:3000/api/v1/pagos');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/userClient.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAllClientes(){
    return this.http.get<Client[]>('http://localhost:3000/api/v1/clientes');
  }

}

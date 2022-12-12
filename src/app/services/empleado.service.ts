import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../model/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  getAllEmpleado(){
    return this.http.get<Empleado[]>('http://localhost:3000/api/v1/empleados');
  }

}

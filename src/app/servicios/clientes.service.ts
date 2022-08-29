import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endpointClientes: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(this.endpointClientes)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
  }

  getCliente(cif: any){

    return this.http.get(this.endpointClientes+ '/' + cif)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
  }

  postClientes(cliente: any) {
    return this.http.post(this.endpointClientes, cliente)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
  }
  putClientes(cliente: any, cif: any){

    return this.http.put(this.endpointClientes + '/' +cif,cliente)
    .pipe(
        map((data: any) => {
          return data;
        })
      )
  }

  deleteClientes(cif: any){

    return this.http.delete(this.endpointClientes + '/' +cif)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
  }


}

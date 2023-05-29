import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './Libro';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = 'http://localhost:3000/books/';

  constructor(private clientehttp: HttpClient) {}
  AgregarLibro(datoslibro: Libro): Observable<any> {
    return this.clientehttp.post(this.API, datoslibro);
  }
  ListarLibro(): Observable<any> {
    return this.clientehttp.get(this.API);
  }
  EditarLibro(bookId: string, datoslibro: Libro): Observable<any> {
    const url = this.API + bookId;    
    return this.clientehttp.put(url, datoslibro);
  }
  BorrarLibro(bookId: string): Observable<any> {
    const url = this.API + bookId;    
    return this.clientehttp.delete(url);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/service/Libro';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css'],
})
export class ListarLibroComponent {
  tableColumns: Array<string> = ['Title', 'Author', 'Year', 'Editorial'];
  listOfBooks: any = [];
  data: Libro = {
    id: 0,
    title: '',
    author: '',
    year: 0,
    editorial: '',
  };

  constructor(private crudService: CrudService, private ruteador: Router) {}
  getBooks() {
    this.crudService.ListarLibro().subscribe((respuesta) => {
      console.log(respuesta);
      this.listOfBooks = respuesta;
      this.ruteador.navigateByUrl('/listar-libro');
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}

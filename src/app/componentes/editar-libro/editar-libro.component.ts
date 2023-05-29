import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css'],
})
export class EditarLibroComponent {
  // Recolectamos los datos desde el formulario
  formularioDeLibros: FormGroup;
  bookId: any = '';

  constructor(
    private route: ActivatedRoute,
    public formulario: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
  ) {
    this.formularioDeLibros = this.formulario.group({
      title: [''],
      author: [''],
      year: [''],
      editorial: [''],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
    });
  }

  enviarDatos() {
    this.crudService
      .EditarLibro(this.bookId, this.formularioDeLibros.value)
      .subscribe((respuesta) => {
        this.ruteador.navigateByUrl('/listar-libro');
      });
  }
}

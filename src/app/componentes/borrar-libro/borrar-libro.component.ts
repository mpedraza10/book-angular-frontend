import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-borrar-libro',
  templateUrl: './borrar-libro.component.html',
  styleUrls: ['./borrar-libro.component.css'],
})
export class BorrarLibroComponent {
  bookId: any = '';

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private ruteador: Router
  ) {}

  enviarDatos() {
    this.crudService.BorrarLibro(this.bookId).subscribe((respuesta) => {
      this.ruteador.navigateByUrl('/listar-libro');
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
    });
    this.enviarDatos();
  }
}

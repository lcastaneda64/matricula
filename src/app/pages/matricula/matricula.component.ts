import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { MatriculaModel } from 'src/app/models/Matricula.model';
import { MatriculaService } from 'src/app/services/matricula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  matricula: MatriculaModel = new MatriculaModel();

  constructor(private readonly matriculaService: MatriculaService) { }

  ngOnInit(): void {
  }

  public registrarMatricula(forma: NgForm): void {
    forma.control.markAllAsTouched();

    if (forma.valid) {
      lastValueFrom(this.matriculaService.postMatricula(this.matricula)).then((response: any) => {
        Swal.fire({
          icon: 'success',
          title: response.msg
        });
        forma.reset();
      }).catch((err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.msg
        })
      });
    }
  }

  public limpiarFormulario(forma: NgForm): void {
    forma.reset();
  }

}

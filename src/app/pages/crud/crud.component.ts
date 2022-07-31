import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/app/models/Response.model';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  mostrarActualizar: boolean = false;
  usuarios: UsuarioModel[] = [];
  idUsuario: string = "";
  constructor(private readonly usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
    .then((response: any) => {
      this.usuarios = response.cont.usuarios;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idUsuario: any) {
    this.idUsuario = idUsuario;
    this.mostrarActualizar = true;
  }

}

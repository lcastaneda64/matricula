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
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios()
    .then((usuarios: any) => {
      this.usuarios = usuarios;
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

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idUsuario = "";
    this.obtenerUsuarios();
  }

  eliminar(usuario: UsuarioModel) {
    Swal.fire({
    icon: "question",
    title: `¿Estás seguro que deseas eliminar a ${usuario.strNombre} ${usuario.strPrimerApellido}?`,
    showCancelButton: true,
    confirmButtonText: 'Sí estoy seguro',
    cancelButtonText: "Cancelar"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuarioService.deleteUsuario(usuario._id)
        .then((response: any) => {
          Swal.fire({
            icon: "info",
            text: "El usuario se eliminó exitosamente"
          });
          this.obtenerUsuarios();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error al actualizar el usuario."
          });
        })
      }
    })
  }

}

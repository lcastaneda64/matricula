import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  constructor(private readonly usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  registrarUsuario(forma: NgForm){

    this.usuarioService.postUsuario(this.usuario)
    .then((response: any) => {
      Swal.fire({
        icon: "success",
        text: "Se registró el usuario exitosamente"
      });
      forma.reset();
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: "Ha habido un erro al registrar el usuario"
      });
    });

  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }

}

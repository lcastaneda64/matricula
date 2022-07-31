import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  @Input() idUsuario: string = "";
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private readonly usuarioService: UsuarioService) { }

  ngOnInit() {
    console.log(this.idUsuario);
    this.usuarioService.getUsuario(this.idUsuario)
    .then((response: any) => {
      this.usuario = response.cont.usuario;
    })
    .catch(() => {});
  }

  actualizarUsuario(forma: NgForm) {
  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }
}

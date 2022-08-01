import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  @Input() idUsuario: string = "";
  usuario: UsuarioModel = new UsuarioModel();
  @Output() emitirActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuario(this.idUsuario)
    .then((response: any) => {
      this.usuario = response.cont.usuario;
    })
    .catch(() => {});
  }

  actualizarUsuario(forma: NgForm) {
    this.usuarioService.putUsuario(this.usuario, this.idUsuario)
    .then((response: any) => {
      Swal.fire({
        icon: "success",
        text: "Se actualizó el usuario exitosamente."
      });
      this.emitirActualizacion.emit();
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: "Ha habido un error al actualizar el usuario."
      });
    });
  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }
}

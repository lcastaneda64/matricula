import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-detail',
  templateUrl: './crud-detail.component.html',
  styleUrls: ['./crud-detail.component.css']
})
export class CrudDetailComponent implements OnInit {

  @Input() id: string = "";
  isNew: boolean = false;

  usuario: UsuarioModel = new UsuarioModel();
  @Output() emitChange: EventEmitter<any> = new EventEmitter();
  constructor(private readonly usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.isNew = !this.id;
    if(!this.isNew){
      this.usuarioService.getUsuario(this.id)
        .then((usuario: any) => {
          this.usuario = usuario;
        });
    }
  }

  submitUsuario(forma: NgForm){
    if(this.isNew){
      this.usuarioService.postUsuario(this.usuario)
      .then(_ => {
        Swal.fire({
          icon: "success",
          text: "Se registró el usuario exitosamente"
        });
        this.emitChange.emit();
      })
      .catch((error: any) => {
        Swal.fire({
          icon: "error",
          text: "Ha habido un erro al registrar el usuario"
        });
      });
    } else {
      this.usuarioService.putUsuario(this.usuario, this.id)
      .then(_ => {
        Swal.fire({
          icon: "success",
          text: "Se actualizó el usuario exitosamente."
        });
        this.emitChange.emit();
      })
      .catch(_ => {
        Swal.fire({
          icon: "error",
          text: "Ha habido un error al actualizar el usuario."
        });
      });
    }
  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }

}

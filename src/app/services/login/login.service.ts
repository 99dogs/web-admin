import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'app/models/usuario.model';
import {  } from 'events';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false
  public usuarioLogadoEmitter = new EventEmitter<boolean>()

  autenticarUsuario(usuario: UsuarioModel): boolean {

    if(usuario.email === "admin@admin.com.br" && usuario.senha === "123"){
      this.usuarioAutenticado = true 
    }else{
      this.usuarioAutenticado = false
    }

    this.usuarioLogadoEmitter.emit(this.usuarioAutenticado)

    return this.usuarioAutenticado

  }

}

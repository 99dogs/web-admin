import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'app/models/usuario.model';
import { LoginService } from 'app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: UsuarioModel = new UsuarioModel()

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    let usuarioAutenticado: boolean = this.loginService.autenticarUsuario(this.usuario)

    if(usuarioAutenticado == true){
      this.router.navigate(["/dashboard"])
    }

  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  public usuarioLogado: boolean = true;

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(){

    if(this.usuarioLogado == false){
      this.router.navigate(["/login"])
    }

    this.loginService.usuarioLogadoEmitter.subscribe((logado: boolean) => {
      this.usuarioLogado = logado
    })
  }

}

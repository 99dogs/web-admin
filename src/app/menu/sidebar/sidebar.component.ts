import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login/login.service';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { 
        path: '/dashboard',
        title: 'Dashboard',         
        icon: 'fa-dashboard',       
        class: '' 
    },
    {
        path: '/configuracao-base',
        title: 'Configuração base',
        icon: 'fa-cogs',
        class: ''
    },
    {
        path: '/termos-e-condicoes',
        title: 'Termos e condições',
        icon: 'fa-file-pdf-o',
        class: ''
    },
    {
        path: '/forma-de-pagamento',
        title: 'Formas de pagamento',
        icon: 'fa-credit-card',
        class: ''
    },
    {
        path: '/dogwalker',
        title: 'Dog walkers',
        icon: 'fa-paw',
        class: ''
    },
    {
        path: '/ticket',
        title: 'Tickets',
        icon: 'fa-ticket',
        class: ''
    },
    {
        path: '/deposito',
        title: 'Depósitos',
        icon: 'fa-bank',
        class: ''
    },
    {
        path: '/reclamacao-sugestao',
        title: 'Feedbacks',
        icon: 'fa-commenting',
        class: ''
    },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
  })

export class SidebarComponent implements OnInit {

    constructor(private loginService: LoginService, private router: Router){}

    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    deslogar(){
        this.loginService.usuarioLogadoEmitter.emit(false)
        this.router.navigate(['/login'])
    }

}

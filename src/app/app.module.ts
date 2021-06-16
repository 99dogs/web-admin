import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { SidebarComponent } from "./menu/sidebar/sidebar.component";
import { NavbarComponent } from "./menu/navbar/navbar.component";
import { ConfiguracaoBaseComponent } from './pages/configuracao-base/configuracao-base.component';
import { TermosCondicoesComponent } from './pages/termos-condicoes/termos-condicoes.component';
import { DogwalkerComponent } from './pages/dogwalker/dogwalker.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormaDePagamentoComponent } from './pages/forma-de-pagamento/forma-de-pagamento.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DepositoComponent } from './pages/deposito/deposito.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    ConfiguracaoBaseComponent,
    TermosCondicoesComponent,
    DogwalkerComponent,
    TicketComponent,
    LogoutComponent,
    LoginComponent,
    FormaDePagamentoComponent,
    PerfilComponent,
    DepositoComponent,
  ],
  imports: [
    CKEditorModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{}),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

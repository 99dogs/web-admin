import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { SidebarComponent } from "./menu/sidebar/sidebar.component";
import { NavbarComponent } from "./menu/navbar/navbar.component";
import { ConfiguracaoBaseComponent } from './pages/configuracao-base/configuracao-base.component';
import { TermosCondicoesComponent } from './pages/termos-condicoes/termos-condicoes.component';
import { DogwalkerComponent } from './pages/dogwalker/dogwalker.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { LoginComponent } from './pages/login/login.component';
import { FormaDePagamentoComponent } from './pages/forma-de-pagamento/forma-de-pagamento.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { LoginService } from "./services/login/login.service";
import { ConfiguracaoBaseEditComponent } from './pages/configuracao-base/edit/configuracao-base-edit/configuracao-base-edit.component';
import { DepositoDetalhesComponent } from './pages/deposito/detalhes/deposito-detalhes/deposito-detalhes.component';
import { DogwalkerDetalhesComponent } from './pages/dogwalker/detalhes/dogwalker-detalhes/dogwalker-detalhes.component';
import { ReclamacaoSugestaoComponent } from './pages/reclamacao-sugestao/reclamacao-sugestao.component';
import { ReclamacaoSugestaoDetalhesComponent } from './pages/reclamacao-sugestao/detalhes/reclamacao-sugestao-detalhes/reclamacao-sugestao-detalhes.component';


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
    LoginComponent,
    FormaDePagamentoComponent,
    PerfilComponent,
    DepositoComponent,
    ConfiguracaoBaseEditComponent,
    DepositoDetalhesComponent,
    DogwalkerDetalhesComponent,
    ReclamacaoSugestaoComponent,
    ReclamacaoSugestaoDetalhesComponent,
  ],
  imports: [
    FormsModule,
    CKEditorModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{}),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

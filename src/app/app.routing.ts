import { Routes } from '@angular/router';
import { ConfiguracaoBaseComponent } from './pages/configuracao-base/configuracao-base.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { DogwalkerComponent } from './pages/dogwalker/dogwalker.component';
import { FormaDePagamentoComponent } from './pages/forma-de-pagamento/forma-de-pagamento.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TermosCondicoesComponent } from './pages/termos-condicoes/termos-condicoes.component';
import { TicketComponent } from './pages/ticket/ticket.component';

export const AppRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configuracao-base', component: ConfiguracaoBaseComponent },
  { path: 'termos-e-condicoes', component: TermosCondicoesComponent },
  { path: 'forma-de-pagamento', component: FormaDePagamentoComponent },
  { path: 'dogwalker', component: DogwalkerComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'deposito', component: DepositoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard' }
]

import { Component, OnInit } from '@angular/core';
import { ConfiguracaoBaseModel } from 'app/models/configuracao-base.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuracao-base-edit',
  templateUrl: './configuracao-base-edit.component.html',
  styleUrls: ['./configuracao-base-edit.component.css']
})
export class ConfiguracaoBaseEditComponent implements OnInit {

  private configuracaoBase: ConfiguracaoBaseModel = new ConfiguracaoBaseModel()

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.configuracaoBase.precoTicket = 15.00
    this.configuracaoBase.taxaPlataforma = 13.00
    this.configuracaoBase.valorMinimoDeposito = 30.00
  }

  atualizarInformacoes(){
    this.toastrService.success("Informações atualizadas com sucesso.")
    console.log(this.configuracaoBase)
  }

}

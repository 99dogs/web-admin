import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TermosCondicoesModel } from 'app/models/termos-condicoes.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-termos-condicoes',
  templateUrl: './termos-condicoes.component.html',
  styleUrls: ['./termos-condicoes.component.css']
})
export class TermosCondicoesComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  public Editor = ClassicEditor;

  private termosCondicoes: TermosCondicoesModel = new TermosCondicoesModel()

  ngOnInit(): void {
    this.termosCondicoes.texto = "<h4>1. Relacionamento Contratual</h4><h4>2. Os Serviços</h4><h4>3. Uso dos Serviços</h4><h4>4. Pagamento</h4><h4>5. Recusa de Garantia; Limitação de Responsabilidade; Indenização.</h4><h4>6. SOLUÇÃO DE CONTROVÉRSIAS</h4><h4>7. Legislação Aplicável; Jurisdição.</h4><h4>8. Outras Disposições</h4>"
  }

  atualizarInformacoes(){
    this.toastrService.success("Informações atualizadas com sucesso.")
  }

}

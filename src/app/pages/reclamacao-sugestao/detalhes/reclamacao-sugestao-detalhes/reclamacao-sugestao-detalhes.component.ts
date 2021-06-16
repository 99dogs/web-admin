import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reclamacao-sugestao-detalhes',
  templateUrl: './reclamacao-sugestao-detalhes.component.html',
  styleUrls: ['./reclamacao-sugestao-detalhes.component.css']
})
export class ReclamacaoSugestaoDetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  private itemId: number = 0

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.itemId = param["id"]
    })
  }
  
}

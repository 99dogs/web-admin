import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-deposito-detalhes',
  templateUrl: './deposito-detalhes.component.html',
  styleUrls: ['./deposito-detalhes.component.css']
})
export class DepositoDetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { }
  public depositoId: number = 0

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.depositoId = param['id']
    })
  }

}

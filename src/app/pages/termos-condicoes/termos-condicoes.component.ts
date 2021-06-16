import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-termos-condicoes',
  templateUrl: './termos-condicoes.component.html',
  styleUrls: ['./termos-condicoes.component.css']
})
export class TermosCondicoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Editor = ClassicEditor;

}

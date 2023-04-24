import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
     {
      conteudo:'I love C Sharp',
      autoria: 'Mauro',
      modelo: 'modelo1'
    },
    {
      conteudo:'Angular é top',
      autoria: 'Mauro',
      modelo: 'modelo2'
    },   
    {
      conteudo:'Powershell comanda.',
      autoria: 'Mauro',
      modelo: 'modelo3'
    }

  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}

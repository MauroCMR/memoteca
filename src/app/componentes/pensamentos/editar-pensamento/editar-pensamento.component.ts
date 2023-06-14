import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  }

  formulario!: FormGroup; 

  constructor(private service :PensamentoService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })

    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([Validators.required,
                                           Validators.pattern(/(.|\s)*\S(.|\s)*/)
                                        ])],
      autoria: ['', Validators.compose([Validators.required,
                                        Validators.minLength(3),
                                        Validators.pattern(/(.|\s)*\S(.|\s)*/)
                                         ])],
      modelo: ['modelo1']
    })
  }

  editarPensamento(){
   if(this.formulario.valid) {
      this.service.editar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
   }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  
  habilitarBotao(): string {
    if  (this.formulario.valid) {
       return 'botao'
    } else {
      return 'botao__desabilitado'
    }

  }
}

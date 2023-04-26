import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalController } from "@ionic/angular";

import { TarefaService } from "../services/tarefa.service";
import { Tarefa } from "../models/tarefa.model";

@Component({
  selector: 'app-tarefa-atualiza',
  templateUrl: './tarefa-atualiza.page.html',
  styleUrls: ['./tarefa-atualiza.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefaAtualizaPage implements OnInit {
  public categorias = ['Domestico',
                       'Pessoal',
                       'Trabalho'];
  public categoriaSelecionada: string = '';

  public dataSelecionada: any;

  @Input() minhaTarefa: Tarefa = {
    id: '',
    nome: '',
    data: '',
    prioridade: '',
    categoria: ''
  };

  constructor(private modalCtrl: ModalController, private tarefaServ: TarefaService) { }

  ngOnInit() {
  }

  public async editar() {
    await this.tarefaServ.gravar(this.minhaTarefa);
    this.dismiss();
  }

  public async dismiss() {
    await this.modalCtrl.dismiss();
  }

  public selectCategory(index: number) {
    this.categoriaSelecionada = this.categorias[ index ];
  }
}

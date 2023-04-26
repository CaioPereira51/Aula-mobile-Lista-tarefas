import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { TarefaService } from "../services/tarefa.service";
import { Tarefa } from "../models/tarefa.model";

@Component({
  selector: 'app-tarefa-nova',
  templateUrl: './tarefa-nova.page.html',
  styleUrls: ['./tarefa-nova.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefaNovaPage implements OnInit {
  public categorias = ['Domestico',
                       'Pessoal',
                       'Trabalho'];
  public categoriaSelecionada: string = '';

  public minhaTarefa: Tarefa = {
    id: '',
    nome: '',
    data: '',
    prioridade: '',
    categoria: ''
  };

  public dataSelecionada = new Date().toISOString();

  constructor(private tarefaServ: TarefaService, private modalCtrl: ModalController) { }

  ngOnInit() { }

  public async adicionar() {
    let uid: any = Date.now();

    uid = uid.toString(16);

    this.minhaTarefa.id = uid;
    this.minhaTarefa.categoria = this.categoriaSelecionada;
    this.minhaTarefa.data = this.dataSelecionada;
    
    if (this.minhaTarefa.nome && this.minhaTarefa.data && this.minhaTarefa.categoria && this.minhaTarefa.prioridade) {
      this.tarefaServ.gravar(this.minhaTarefa);
      
      this.dismiss();
    }
  }

  public async dismiss(){
    await this.modalCtrl.dismiss(this.minhaTarefa);
  }

  public selecionarCategoria(index: number) {
    this.categoriaSelecionada = this.categorias[index];
  }
}

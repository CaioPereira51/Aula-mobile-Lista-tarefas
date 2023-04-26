import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

import { TarefaService } from '../services/tarefa.service';
import { TarefaNovaPage } from '../tarefa-nova/tarefa-nova.page';
import { TarefaAtualizaPage } from '../tarefa-atualiza/tarefa-atualiza.page';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TarefaNovaPage, TarefaAtualizaPage]
})

export class HomePage implements OnInit{
  public hoje: number = Date.now();

  public tarefasLista: Array<Tarefa> = [
    // {
    //   id: '001',
    //   nome: 'Limpar',
    //   data: '2022-09-16',
    //   prioridade: 'baixo',
    //   categoria: 'domestico'
    // }
  ] ;
  
  constructor(private tarefaService: TarefaService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listar();
  }

  public async adicionar() {
    const modal = await this.modalCtrl.create({
      component: TarefaNovaPage
    });

    modal.onDidDismiss().then(novaTarefa => {
      this.listar();
    });

    return await modal.present();
  }

  public listar() {
    this.tarefaService.carregar().then((tarefas: Tarefa[]) => {
      this.tarefasLista = tarefas;
    })
  }

  public deletar(id: string) {
    this.tarefaService.deletar(id).then(() => {
      this.listar();
    });
  }

  public async editar(tarefaSelecionada: Tarefa) {
    const modal = await this.modalCtrl.create({
      component: TarefaAtualizaPage,
      componentProps: {
        minhaTarefa: tarefaSelecionada
      }
    })

    modal.onDidDismiss().then(() => {
      this.listar();
    });

    return await modal.present();
  }

  public prioridadeCor(prioridade: string) {
    let cor: string = 'danger';
    
    if(prioridade === 'medio'){
      cor = 'warning';
    } else if(prioridade === 'baixo') {
      cor = 'success';
    }

    return cor;
  }
}

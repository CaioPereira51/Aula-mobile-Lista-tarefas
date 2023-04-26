import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarefaAtualizaPage } from './tarefa-atualiza.page';

describe('TarefaAtualizaPage', () => {
  let component: TarefaAtualizaPage;
  let fixture: ComponentFixture<TarefaAtualizaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarefaAtualizaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

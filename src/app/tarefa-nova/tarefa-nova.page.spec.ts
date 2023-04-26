import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarefaNovaPage } from './tarefa-nova.page';

describe('TarefaNovaPage', () => {
  let component: TarefaNovaPage;
  let fixture: ComponentFixture<TarefaNovaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarefaNovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

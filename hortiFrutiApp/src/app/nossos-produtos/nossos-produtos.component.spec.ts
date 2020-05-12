import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosProdutosComponent } from './nossos-produtos.component';

describe('NossosProdutosComponent', () => {
  let component: NossosProdutosComponent;
  let fixture: ComponentFixture<NossosProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NossosProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NossosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

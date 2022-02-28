import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutventeComponent } from './ajoutvente.component';

describe('AjoutventeComponent', () => {
  let component: AjoutventeComponent;
  let fixture: ComponentFixture<AjoutventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

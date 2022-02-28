import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpersonneComponent } from './ajoutpersonne.component';

describe('AjoutpersonneComponent', () => {
  let component: AjoutpersonneComponent;
  let fixture: ComponentFixture<AjoutpersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

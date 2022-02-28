import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartventeComponent } from './chartvente.component';

describe('ChartventeComponent', () => {
  let component: ChartventeComponent;
  let fixture: ComponentFixture<ChartventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

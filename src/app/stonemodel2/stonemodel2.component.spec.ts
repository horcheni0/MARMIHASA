import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stonemodel2Component } from './stonemodel2.component';

describe('Stonemodel2Component', () => {
  let component: Stonemodel2Component;
  let fixture: ComponentFixture<Stonemodel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stonemodel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stonemodel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

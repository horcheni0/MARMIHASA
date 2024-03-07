import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stonemodel4Component } from './stonemodel4.component';

describe('Stonemodel4Component', () => {
  let component: Stonemodel4Component;
  let fixture: ComponentFixture<Stonemodel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stonemodel4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stonemodel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

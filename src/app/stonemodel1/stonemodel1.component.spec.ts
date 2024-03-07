import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stonemodel1Component } from './stonemodel1.component';

describe('Stonemodel1Component', () => {
  let component: Stonemodel1Component;
  let fixture: ComponentFixture<Stonemodel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stonemodel1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stonemodel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

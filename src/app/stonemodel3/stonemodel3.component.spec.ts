import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stonemodel3Component } from './stonemodel3.component';

describe('Stonemodel3Component', () => {
  let component: Stonemodel3Component;
  let fixture: ComponentFixture<Stonemodel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stonemodel3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stonemodel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessignComponent } from './dessign.component';

describe('DessignComponent', () => {
  let component: DessignComponent;
  let fixture: ComponentFixture<DessignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DessignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DessignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

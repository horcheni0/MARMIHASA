import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoComponent } from './sto.component';

describe('StoComponent', () => {
  let component: StoComponent;
  let fixture: ComponentFixture<StoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemodelComponent } from './homemodel.component';

describe('HomemodelComponent', () => {
  let component: HomemodelComponent;
  let fixture: ComponentFixture<HomemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomemodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgbeginComponent } from './imgbegin.component';

describe('ImgbeginComponent', () => {
  let component: ImgbeginComponent;
  let fixture: ComponentFixture<ImgbeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgbeginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgbeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontenComponent } from './homeconten.component';

describe('HomecontenComponent', () => {
  let component: HomecontenComponent;
  let fixture: ComponentFixture<HomecontenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecontenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomecontenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

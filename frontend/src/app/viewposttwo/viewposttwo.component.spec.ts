import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewposttwoComponent } from './viewposttwo.component';

describe('ViewposttwoComponent', () => {
  let component: ViewposttwoComponent;
  let fixture: ComponentFixture<ViewposttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewposttwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewposttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

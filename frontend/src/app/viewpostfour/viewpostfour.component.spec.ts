import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostfourComponent } from './viewpostfour.component';

describe('ViewpostfourComponent', () => {
  let component: ViewpostfourComponent;
  let fixture: ComponentFixture<ViewpostfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpostfourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpostfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

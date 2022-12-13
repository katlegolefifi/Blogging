import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostthreeComponent } from './viewpostthree.component';

describe('ViewpostthreeComponent', () => {
  let component: ViewpostthreeComponent;
  let fixture: ComponentFixture<ViewpostthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpostthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpostthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

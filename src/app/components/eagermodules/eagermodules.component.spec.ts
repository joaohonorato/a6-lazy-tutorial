import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagermodulesComponent } from './eagermodules.component';

describe('EagermodulesComponent', () => {
  let component: EagermodulesComponent;
  let fixture: ComponentFixture<EagermodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagermodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagermodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

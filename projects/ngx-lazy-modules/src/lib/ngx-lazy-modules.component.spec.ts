import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLazyModulesComponent } from './ngx-lazy-modules.component';

describe('NgxLazyModulesComponent', () => {
  let component: NgxLazyModulesComponent;
  let fixture: ComponentFixture<NgxLazyModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLazyModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLazyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

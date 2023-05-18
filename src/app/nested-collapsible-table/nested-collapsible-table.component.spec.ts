import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCollapsibleTableComponent } from './nested-collapsible-table.component';

describe('NestedCollapsibleTableComponent', () => {
  let component: NestedCollapsibleTableComponent;
  let fixture: ComponentFixture<NestedCollapsibleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedCollapsibleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedCollapsibleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

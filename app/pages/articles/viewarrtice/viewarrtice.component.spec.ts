import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewarrticeComponent } from './viewarrtice.component';

describe('ViewarrticeComponent', () => {
  let component: ViewarrticeComponent;
  let fixture: ComponentFixture<ViewarrticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewarrticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewarrticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

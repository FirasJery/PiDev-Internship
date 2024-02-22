import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetModificationComponent } from './sujet-modification.component';

describe('SujetModificationComponent', () => {
  let component: SujetModificationComponent;
  let fixture: ComponentFixture<SujetModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetModificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujetModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

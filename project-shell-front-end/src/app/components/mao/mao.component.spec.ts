import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaoComponent } from './mao.component';

describe('MaoComponent', () => {
  let component: MaoComponent;
  let fixture: ComponentFixture<MaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

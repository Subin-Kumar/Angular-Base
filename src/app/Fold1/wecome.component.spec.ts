import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WecomeComponent } from './wecome.component';

describe('WecomeComponent', () => {
  let component: WecomeComponent;
  let fixture: ComponentFixture<WecomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WecomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WecomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageBookComponent } from './full-page-book.component';

describe('FullPageBookComponent', () => {
  let component: FullPageBookComponent;
  let fixture: ComponentFixture<FullPageBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPageBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

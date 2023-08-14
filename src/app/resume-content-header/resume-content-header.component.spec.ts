import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContentHeaderComponent } from './resume-content-header.component';

describe('ResumeContentHeaderComponent', () => {
  let component: ResumeContentHeaderComponent;
  let fixture: ComponentFixture<ResumeContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeContentHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

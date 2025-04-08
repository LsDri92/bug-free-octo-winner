import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSectionComponent } from './software-section.component';

describe('SoftwareSectionComponent', () => {
  let component: SoftwareSectionComponent;
  let fixture: ComponentFixture<SoftwareSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

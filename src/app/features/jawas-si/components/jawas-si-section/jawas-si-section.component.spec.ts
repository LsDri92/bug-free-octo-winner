import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JawasSiSectionComponent } from './jawas-si-section.component';

describe('JawasSiSectionComponent', () => {
  let component: JawasSiSectionComponent;
  let fixture: ComponentFixture<JawasSiSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JawasSiSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JawasSiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

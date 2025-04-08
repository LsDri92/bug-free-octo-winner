import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksSectionComponent } from './links-section.component';

describe('LinksSectionComponent', () => {
  let component: LinksSectionComponent;
  let fixture: ComponentFixture<LinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

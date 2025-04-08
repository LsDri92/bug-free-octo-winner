import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsGameComponent } from './skills-game.component';

describe('SkillsGameComponent', () => {
  let component: SkillsGameComponent;
  let fixture: ComponentFixture<SkillsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

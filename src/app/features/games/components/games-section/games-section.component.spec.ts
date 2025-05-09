import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSectionComponent } from './games-section.component';

describe('GamesSectionComponent', () => {
  let component: GamesSectionComponent;
  let fixture: ComponentFixture<GamesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

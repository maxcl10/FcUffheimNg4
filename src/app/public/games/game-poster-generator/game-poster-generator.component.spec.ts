import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePosterGeneratorComponent } from './game-poster-generator.component';

describe('GamePosterComponent', () => {
  let component: GamePosterGeneratorComponent;
  let fixture: ComponentFixture<GamePosterGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamePosterGeneratorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePosterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

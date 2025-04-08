import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-game.component.html',
  styleUrl: './skills-game.component.scss'
})
export class SkillsGameComponent {
  technologies: string[] = [
    'assets/skills/angular.png',
    'assets/skills/csharp.png',
    'assets/skills/css.png',
    'assets/skills/electron.png',
    'assets/skills/git.png',
    'assets/skills/github.png',
    'assets/skills/html.png',
    'assets/skills/java.png',
    'assets/skills/js.png',
    'assets/skills/ldtk.png',
    'assets/skills/nodejs.png',
    'assets/skills/pixi.png',
    'assets/skills/react-js.png',
    'assets/skills/typescript.png',
    'assets/skills/uefnVerse.png',
    'assets/skills/unity.png',
    'assets/skills/unrealengine.png',
  ];

  get transformStyle(): string {
    return `translateX(0)`; // placeholder, estático si usamos animación CSS
  }

  get technologiesDoubled(): string[] {
    return [...this.technologies, ...this.technologies];
  }
}
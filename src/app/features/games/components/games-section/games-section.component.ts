import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-games-section',
  standalone: true,
  imports: [],
  templateUrl: './games-section.component.html',
  styleUrls: ['./games-section.component.scss']
})
export class GamesSectionComponent implements AfterViewInit {
  @ViewChild('pixiContainer', { static: true }) pixiContainer!: ElementRef;
  private app!: PIXI.Application;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initPixi();
    }
  }

  initPixi(): void {
    this.app = new PIXI.Application({
      resizeTo: this.pixiContainer.nativeElement,
      backgroundColor: 0x000000,
      antialias: true
    });
  
    this.pixiContainer.nativeElement.appendChild(this.app.view);
  
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xff0000);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();
    graphics.position.set(100, 100);
    this.app.stage.addChild(graphics);
  
    this.app.stage.eventMode = 'static';
  
    let targetX = graphics.x;
    let targetY = graphics.y;
  
    this.app.stage.on('pointermove', (event) => {
      const pos = event.global;
      targetX = pos.x - 50; // centro del cuadrado
      targetY = pos.y - 50;
    });
  
    // Movimiento con suavidad usando inercia
    this.app.ticker.add(() => {
      const ease = 0.1; // cuanto más bajo, más suave
      graphics.x += (targetX - graphics.x) * ease;
      graphics.y += (targetY - graphics.y) * ease;
    });
  }
  
  
}

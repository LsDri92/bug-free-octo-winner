import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsGameComponent } from './components/skills-game/skills-game.component';

const routes: Routes = [
  { path: '', component: SkillsGameComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsGameRoutingModule {}

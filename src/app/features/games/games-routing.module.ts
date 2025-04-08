import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesSectionComponent } from './components/games-section/games-section.component';

const routes: Routes = [
  { path: '', component: GamesSectionComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}

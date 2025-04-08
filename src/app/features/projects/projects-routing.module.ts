import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

const routes: Routes = [
  { path: '', component: ProjectsSectionComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareSectionComponent } from './components/software-section/software-section.component';

const routes: Routes = [
  { path: '', component: SoftwareSectionComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JawasSiSectionComponent } from './components/jawas-si-section/jawas-si-section.component';

const routes: Routes = [
  { path: '', component: JawasSiSectionComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JawasSiRoutingModule {}

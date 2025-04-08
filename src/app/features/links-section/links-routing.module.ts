import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksSectionComponent } from './components/links-section.component';

const routes: Routes = [
  { path: '', component: LinksSectionComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule {}

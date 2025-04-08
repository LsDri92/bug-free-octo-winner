import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './components/about-section/about-section.component';

const routes: Routes = [
  { path: '', component: AboutSectionComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}

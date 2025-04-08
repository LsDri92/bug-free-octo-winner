import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';

const routes: Routes = [
  { path: '', component: ContactModalComponent } // Ruta principal del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}

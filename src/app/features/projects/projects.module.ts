import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';



@NgModule({
  declarations: [
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SafeUrlPipe
  ]
})
export class ProjectsModule { }

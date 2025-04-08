import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @ViewChild('footerRef') footerRef!: ElementRef;
  show = false;
  year = new Date().getFullYear();

}

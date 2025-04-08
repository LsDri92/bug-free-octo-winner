import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { FooterComponent } from '../../footer/component/footer.component';


@Component({
  selector: 'app-links-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './links-section.component.html',
  styleUrl: './links-section.component.scss'
})


export class LinksSectionComponent {
  form = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Por favor completá todos los campos.');
      return;
    }

    emailjs
      .send(
        'service_uh9mb3c', // Reemplazá con tu Service ID
        'template_rpo90kk', // Reemplazá con tu Template ID
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        },
        'gPhm4EFalgKx3KrHG' // Reemplazá con tu Public Key
      )
      .then(() => {
        alert('¡Mensaje enviado con éxito!');
        this.form = { name: '', email: '', message: '' };
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Ocurrió un error al enviar el mensaje.');
      });
  }
}

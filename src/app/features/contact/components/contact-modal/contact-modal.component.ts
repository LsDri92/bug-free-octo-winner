import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ILanguage } from '../../../../core/models/ILanguage';
import { Subject, takeUntil } from 'rxjs';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  standalone: true,
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ContactModalComponent {
    isSending = false;
    lastSentTime = 0;
    lang: ILanguage | null = null;
    private destroy$ = new Subject<void>();
    
    get contact() {
      return this.lang?.contact ?? {title: '', name: '', message: '', email: '', error: '', success: '', invalidMail: '', send: '', cancel: '', wait: '', fields: '' };
    }
  

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  successMessage = '';
  errorMessage = '';
  form = {
    name: '',
    email: '',
    message: '',
    botField: ''
  };

  constructor(private translationService: TranslationService){}

        ngOnInit() {
          this.translationService.currentTranslations
          .pipe(takeUntil(this.destroy$))
          .subscribe(data => this.lang = data);
        }
      
        ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }

  close() {
    this.closed.emit();
  }

  sendEmail(formRef: NgForm) {
    this.successMessage = '';
    this.errorMessage = '';
  
    // 🛡️ Anti-bot honeypot
    if (this.form.botField) {
      return;
    }
  
    // ⏳ Cooldown
    const now = Date.now();
    const cooldown = 10000; // 10 segundos
    if (this.isSending || now - this.lastSentTime < cooldown) {
      this.errorMessage = this.contact.wait;
      return;
    }
  
    // ✅ Validaciones manuales
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.errorMessage = this.contact.fields;
      return;
    }
  
    if (!this.isValidEmail(this.form.email)) {
      this.errorMessage = this.contact.invalidMail;
      return;
    }
  
    this.isSending = true;
  
    emailjs
      .send(
        'service_uh9mb3c',
        'template_rpo90kk',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        },
        'gPhm4EFalgKx3KrHG'
      )
      .then(() => {
        this.successMessage = this.contact.success;
        console.log(this.successMessage)
      
          this.form = { name: '', email: '', message: '', botField: '' };
          formRef.resetForm();
          this.lastSentTime = now;
      
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        this.errorMessage = this.contact.error;
      })
      .finally(() => {
        this.isSending = false;
      });
  }

private isValidEmail(email: string): boolean {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
}
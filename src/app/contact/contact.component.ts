import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactConfigService, ContactCard } from '../services/contact-config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, HttpClientModule]
})
export class ContactComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactConfigService = inject(ContactConfigService);

  readonly submitAttempted = signal(false);
  readonly submitState = signal<'idle' | 'success'>('idle');
  readonly pageTitle = signal('Request your power wash quote');
  readonly pageDescription = signal('Tell us about your surface, and we will respond within one business day. No spam, just a clear price range and available slots.');
  readonly services = signal<string[]>([]);
  readonly whatToExpect = signal<string[]>([]);
  readonly contactSideTitle = signal('Call or text now');
  readonly contactSideLead = signal('Need a same-week clean? Reach out directly for priority slots.');
  readonly contactCards = signal<ContactCard[]>([]);

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9()\s.+-]{7,}$/)]],
    address: ['', [Validators.required]],
    service: ['', [Validators.required]],
    details: ['']
  });

  ngOnInit(): void {
    this.loadConfig();
  }

  private async loadConfig(): Promise<void> {
    try {
      const config = await this.contactConfigService.loadConfig();
      this.pageTitle.set(config.pageTitle);
      this.pageDescription.set(config.pageDescription);
      this.services.set(config.services);
      this.whatToExpect.set(config.whatToExpect);
      this.contactSideTitle.set(config.contactSideTitle);
      this.contactSideLead.set(config.contactSideLead);
      this.contactCards.set(config.contactCards);
    } catch (error) {
      console.error('Failed to load contact config:', error);
    }
  }

  onSubmit(): void {
    this.submitAttempted.set(true);

    if (this.contactForm.invalid) {
      this.submitState.set('idle');
      return;
    }

    this.submitState.set('success');
    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      details: ''
    });
  }
}

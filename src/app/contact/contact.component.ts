import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly submitAttempted = signal(false);
  readonly submitState = signal<'idle' | 'success'>('idle');
  readonly services = signal([
    'House wash',
    'Driveway clean',
    'Deck or patio',
    'Commercial storefront',
    'Fence or gate'
  ]);

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9()\s.+-]{7,}$/)]],
    address: ['', [Validators.required]],
    service: ['', [Validators.required]],
    details: ['']
  });

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

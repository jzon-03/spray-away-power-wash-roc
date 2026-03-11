import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface ContactCard {
  label: string;
  value: string;
}

export interface ContactConfig {
  pageTitle: string;
  pageDescription: string;
  services: string[];
  whatToExpect: string[];
  contactSideTitle: string;
  contactSideLead: string;
  contactCards: ContactCard[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactConfigService {
  private readonly http = inject(HttpClient);

  async loadConfig(): Promise<ContactConfig> {
    const csvText = await firstValueFrom(
      this.http.get('contact-config.csv', { responseType: 'text' })
    );

    const lines = csvText.trim().split('\n').slice(1); // Skip header
    const config: ContactConfig = {
      pageTitle: '',
      pageDescription: '',
      services: [],
      whatToExpect: [],
      contactSideTitle: '',
      contactSideLead: '',
      contactCards: []
    };

    for (const line of lines) {
      const [type, label, value] = line.split(',').map(v => v.trim());

      switch (type) {
        case 'page_title':
          config.pageTitle = label;
          break;
        case 'page_description':
          config.pageDescription = label;
          break;
        case 'service':
          config.services.push(label);
          break;
        case 'what_to_expect':
          config.whatToExpect.push(label);
          break;
        case 'contact_side_title':
          config.contactSideTitle = label;
          break;
        case 'contact_side_lead':
          config.contactSideLead = label;
          break;
        case 'contact_card':
          config.contactCards.push({ label, value });
          break;
      }
    }

    return config;
  }
}

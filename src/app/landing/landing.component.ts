import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink]
})
export class LandingComponent {
  readonly metrics = signal([
    { value: '24hr', label: 'Quote turnaround' },
    { value: '98%', label: 'Client satisfaction' },
    { value: '4.9', label: 'Average rating' }
  ]);

  readonly services = signal([
    { title: 'Home exteriors', copy: 'Siding, brick, stucco, and trim cleaned safely.' },
    { title: 'Driveways', copy: 'Deep extraction for concrete, pavers, and seal-ready prep.' },
    { title: 'Decks and patios', copy: 'Gentle wash to lift algae and protect finishes.' },
    { title: 'Commercial storefronts', copy: 'Fast refresh for curb appeal and foot traffic.' }
  ]);

  readonly steps = signal([
    { title: 'Book', copy: 'Pick a time and tell us the surface type.' },
    { title: 'Protect', copy: 'We stage, tape, and pre-soak landscaping.' },
    { title: 'Restore', copy: 'Soft wash or pressure wash based on material.' },
    { title: 'Review', copy: 'We walk the site with you before we leave.' }
  ]);

  readonly reviews = signal([
    {
      name: 'Jamie R.',
      quote: 'Our vinyl siding looked new in one afternoon. Easy booking and great crew.'
    },
    {
      name: 'Khalil P.',
      quote: 'They removed years of grime from the driveway without damage.'
    },
    {
      name: 'Mara S.',
      quote: 'Professional, on time, and the patio has never looked better.'
    }
  ]);

  readonly serviceAreas = signal([
    'Rochester',
    'Brighton',
    'Pittsford',
    'Henrietta',
    'Irondequoit',
    'Greece'
  ]);
}

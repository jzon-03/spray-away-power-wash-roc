import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  readonly metrics = signal([
    { label: 'Jobs this week', value: '18' },
    { label: 'Avg. response time', value: '3 hrs' },
    { label: 'Active crews', value: '4' },
    { label: 'Repeat clients', value: '62%' }
  ]);

  readonly todaysRoute = signal([
    { time: '8:30 AM', location: 'Pittsford', task: 'Soft wash + gutters' },
    { time: '11:00 AM', location: 'Brighton', task: 'Driveway clean' },
    { time: '1:45 PM', location: 'Rochester', task: 'Patio refresh' },
    { time: '3:30 PM', location: 'Greece', task: 'Storefront rinse' }
  ]);

  readonly recentJobs = signal([
    { address: '310 Park Ave', service: 'House wash', status: 'Completed' },
    { address: '88 Elmwood Ave', service: 'Deck wash', status: 'Completed' },
    { address: '192 Lake Rd', service: 'Fence clean', status: 'Scheduled' },
    { address: '45 Monroe Ave', service: 'Commercial rinse', status: 'In progress' }
  ]);

  readonly crewStatus = signal([
    { name: 'Crew North', state: 'On route', note: 'ETA 9:45 AM' },
    { name: 'Crew East', state: 'Wrapping up', note: 'Final rinse in progress' },
    { name: 'Crew West', state: 'Available', note: 'Ready for new request' }
  ]);
}

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { App } from './app/app';
import { AppRoutingModule } from './app/app-routing-module';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err => console.error(err));

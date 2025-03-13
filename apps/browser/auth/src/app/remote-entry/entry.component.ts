import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWelcomeComponent } from './auth-welcome.component';

@Component({
  imports: [CommonModule, AuthWelcomeComponent],
  selector: 'auth-entry',
  template: `<auth-welcome></auth-welcome>`,
})
export class RemoteEntryComponent {}

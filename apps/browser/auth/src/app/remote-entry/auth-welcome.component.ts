import { Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellEmbedded } from '@org/common';

@Component({
  selector: 'auth-welcome',
  imports: [CommonModule],
  template: `
    @if (isShellEmbedded) {
      Embedded Auth application!
      asdfasdf
    } @else {
      Standalone Auth application!  asdf 
    }
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class AuthWelcomeComponent {
  constructor(
    @Inject(ShellEmbedded) @Optional() readonly isShellEmbedded = false
  ) {
    console.log('isShellEmbedded', isShellEmbedded);
  }
}

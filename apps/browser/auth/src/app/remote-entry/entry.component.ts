import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellEmbedded } from '@inveniam/common';

@Component({
  imports: [CommonModule],
  selector: 'auth-entry',
  template: `<h2>Auth {{isShellEmbedded ? 'Embedded' : 'Standalone'}}</h2>`,
})
export class RemoteEntryComponent {
  constructor(
    @Inject(ShellEmbedded) @Optional() readonly isShellEmbedded = false
  ) {}
}

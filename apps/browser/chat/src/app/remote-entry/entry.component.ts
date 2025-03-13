import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellEmbedded } from '@org/common';

@Component({
  imports: [CommonModule],
  selector: 'chat-entry',
  template: `<h2>Chat {{isShellEmbedded ? 'Embedded' : 'Standalone'}}</h2>`,
})
export class RemoteEntryComponent {
  constructor(
    @Inject(ShellEmbedded) @Optional() readonly isShellEmbedded = false
  ) {}
}

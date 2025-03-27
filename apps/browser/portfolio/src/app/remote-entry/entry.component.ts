import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellEmbedded } from '@inveniam/common';

import { ButtonComponent } from '@inveniam/design-system';

@Component({
  imports: [CommonModule, ButtonComponent],
  selector: 'portfolio-entry',
  template: `<h2>
      Portfolio {{ isShellEmbedded ? 'Embedded' : 'Standalone' }}
    </h2>
    <inv-button>Click me</inv-button>`,
})
export class RemoteEntryComponent {
  constructor(
    @Inject(ShellEmbedded) @Optional() readonly isShellEmbedded = false
  ) {}
}

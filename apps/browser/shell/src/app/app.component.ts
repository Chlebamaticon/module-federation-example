import { Component, Inject, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShellEmbedded } from '@inveniam/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';

@Component({
  imports: [SidebarLayoutComponent, RouterModule],
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: ShellEmbedded,
      useValue: true,
    },
  ],
})
export class AppComponent {
  title = 'shell';
  constructor(
    @Inject(ShellEmbedded) @Optional() readonly isShellEmbedded = false
  ) {
    console.log('isShellEmbedded', isShellEmbedded);
  }
}

import { Component, Inject, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarLayoutComponent } from './sidebar-layout.component';

import { ShellEmbedded } from '@org/common';

@Component({
  imports: [SidebarLayoutComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: ShellEmbedded,
      useValue: true,
    }
  ]
})
export class AppComponent {
  title = 'shell';
  constructor(
    @Inject(ShellEmbedded) @Optional() readonly isShellEmbedded = false
  ) {
    console.log('isShellEmbedded', isShellEmbedded);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shell-sidebar-layout',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="layout">
      <div class="layout__sidebar">
        <ul class="remote-menu">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="auth">Auth</a></li>
          <li><a routerLink="portfolio">Portfolio</a></li>
          <li><a routerLink="chat">Chat</a></li>
        </ul>
      </div>
      <div class="layout__navbar"></div>
      <div class="layout__content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1 1 100%;
        flex-flow: column nowrap;
      }

      .layout {
        min-height: 100dvh;
        height: 100%;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: min-content 1fr;

        grid-template-areas:  'sidebar navbar'
                              'sidebar content';

        &__sidebar {
          grid-area: sidebar;
        }

        &__navbar {
          grid-area: navbar;
        }

        &__content {
          grid-area: content;
        }

        &__sidebar {
          border-right: 1px solid #f0f0f0;
          padding: 1rem;
        }

        &__navbar {
          border-bottom: 1px solid #f0f0f0;
          padding: 1rem;
        }

        &__content {
          padding: 1rem;
        }

        .remote-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .remote-menu li {
          margin-bottom: 0.25rem;
        }
      }
    `
  ]
})
export class SidebarLayoutComponent {}

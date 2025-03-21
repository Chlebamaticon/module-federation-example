/* eslint-disable @nx/enforce-module-boundaries */
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () =>
          import('apps/browser/chat/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('apps/browser/portfolio/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('apps/browser/auth/Routes').then((m) => m!.remoteRoutes),
      },
    ],
  },
];

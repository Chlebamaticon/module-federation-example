import { InjectionToken } from '@angular/core';

export const ShellEmbedded = new InjectionToken('is-shell-embedded', {
    factory: () => false
});

import { trigger, style, animate, transition } from '@angular/animations';

export const slideInAnimation = trigger('enterAnimation', [
  transition(':enter', [
    style({transform: 'translateX(100%)', opacity: 0}),
    animate('150ms', style({transform: 'translateX(0)', opacity: 1}))
  ])
]);

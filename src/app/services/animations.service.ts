import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  sequence  } from '@angular/animations';

export const rightToLeft = trigger('rightToLeft', [
  state('right', style({
    transform: 'translateX(100%)',
    right: 0
  })),
  state('left', style({
    transform: 'translateX(-100%)',
    left: 0
  })),
  transition('right => left', [
    animate('10s')
  ])
]);

export const fade = trigger('fade', [
  state('visible', style({
    opacity: 1
  })),
  state('hidden', style({
    opacity: 0
  })),
  transition('hidden => visible', [
    animate('3s')
  ]),
  transition('visible => hidden',
    sequence([
      animate('7s', style ({opacity: 1})),
      animate('0.3s', style ({opacity: 0}))
    ]))
]);

export const fadeMessage = trigger('fadeMessage', [
  state('visible', style({opacity: 0})),
  state('hidden', style({opacity: 0})),
  state('stopped', style({opacity: 0})),
  transition('visible => hidden', [
    animate('1s')
  ]),
  transition('* => visible',
    sequence([
      animate('200ms', style ({opacity: 1})),
      animate('2000ms', style ({opacity: 1})),
      animate('200ms', style ({ opacity: '0'}))
    ]))
]);



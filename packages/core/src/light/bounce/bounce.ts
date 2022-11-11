import animejs from 'animejs'
export function bounce(target: HTMLElement) {
  animejs({
    target,
    translateY: [-20, 0],
  })
}

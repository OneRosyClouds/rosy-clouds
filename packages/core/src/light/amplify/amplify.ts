import animejs from 'animejs'
export interface AmplifyOptions {
  duration?: number
}
export function amplify(targets: HTMLElement | HTMLElement[], options: AmplifyOptions = {}) {
  const { duration = 300 } = options
  animejs({
    targets,
    scale: ['1.1', '1'],
    duration,
    easing: 'spring(1, 80, 10, 0)',
  })
}

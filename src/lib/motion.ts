export const motionTokens = {
  duration: {
    fast: 0.18,
    normal: 0.32,
    slow: 0.56,
    reveal: 0.82,
  },
  easing: {
    editorial: [0.22, 1, 0.36, 1] as [number, number, number, number],
    enter: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  spring: {
    gentle: { stiffness: 180, damping: 24, mass: 0.8 },
    responsive: { stiffness: 260, damping: 28, mass: 0.7 },
  },
  distance: {
    small: 8,
    normal: 16,
    hero: 64,
  },
  scroll: {
    navbarTrigger: 24,
  },
  stagger: 0.08,
} as const;

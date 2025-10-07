/**
 * Cato Design System - Typography
 * Based on Roboto font family with consistent sizing
 */

export const typography = {
  fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  
  // Font weights
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  
  // Font sizes
  h1: {
    fontSize: '2.125rem', // 34px
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.15px',
  },
  
  h2: {
    fontSize: '1.5rem', // 24px
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.15px',
  },
  
  h3: {
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.15px',
  },
  
  h4: {
    fontSize: '1.125rem', // 18px
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.15px',
  },
  
  h5: {
    fontSize: '1rem', // 16px
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.15px',
  },
  
  h6: {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.15px',
  },
  
  // Body text
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
  },
  
  body2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.17px',
  },
  
  // Small text
  caption: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.15px',
  },
  
  // Button text
  button: {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.15px',
    textTransform: 'none' as const,
  },
  
  // Overline
  overline: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
  },
} as const;

export type Typography = typeof typography;

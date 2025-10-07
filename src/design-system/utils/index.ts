/**
 * Cato Design System - Utilities
 * Common utility functions and helpers
 */

// Spacing utilities
export const getSpacing = (multiplier: number) => `${multiplier * 8}px`;

// Color utilities
export const getContrastColor = (backgroundColor: string) => {
  // Simple contrast calculation - in production, use a proper color library
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
};

// Responsive utilities
export const getResponsiveValue = (values: {
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
}) => values;

// Accessibility utilities
export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

// RTL utilities
export const getRTLValue = (ltrValue: any, rtlValue: any, isRTL: boolean = false) => {
  return isRTL ? rtlValue : ltrValue;
};

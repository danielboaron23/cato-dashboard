/**
 * Cato Design System - Color Palette
 * Based on the existing design system colors
 */

export const palette = {
  // Primary colors
  primary: {
    main: '#158864',
    dark: '#116d50',
    light: '#c4ebdf',
    contrastText: '#ffffff',
  },
  
  // Secondary colors
  secondary: {
    main: '#1687f7',
    dark: '#1270db',
    light: 'rgba(22, 135, 247, 0.3)',
    contrastText: '#ffffff',
  },
  
  // Text colors
  text: {
    primary: 'rgba(39, 60, 92, 0.9)',
    secondary: 'rgba(39, 60, 92, 0.6)',
    disabled: 'rgba(39, 60, 92, 0.4)',
    hint: 'rgba(39, 60, 92, 0.5)',
  },
  
  // Background colors
  background: {
    default: '#ffffff',
    paper: '#f2f4f7',
    section: '#f0f9f6',
  },
  
  // Status colors
  success: {
    main: '#24a57c',
    light: 'rgba(36, 165, 124, 0.1)',
    dark: '#0f4534',
  },
  
  warning: {
    main: '#ff9800',
    light: 'rgba(255, 152, 0, 0.1)',
    dark: '#663d00',
  },
  
  error: {
    main: '#e60000',
    light: 'rgba(230, 0, 0, 0.1)',
    dark: '#5c0000',
  },
  
  info: {
    main: '#1687f7',
    light: 'rgba(9, 53, 104, 0.1)',
    dark: '#093568',
  },
  
  // Neutral colors
  grey: {
    50: '#f8f9fa',
    100: '#f1f3f4',
    200: '#e8eaed',
    300: '#dadce0',
    400: '#bdc1c6',
    500: '#9aa0a6',
    600: '#80868b',
    700: '#5f6368',
    800: '#3c4043',
    900: '#202124',
  },
  
  // Divider
  divider: '#d2d9e4',
  
  // Action colors
  action: {
    active: 'rgba(39, 60, 92, 0.6)',
    hover: 'rgba(39, 60, 92, 0.04)',
    selected: 'rgba(21, 136, 100, 0.08)',
    disabled: 'rgba(39, 60, 92, 0.26)',
    disabledBackground: 'rgba(39, 60, 92, 0.12)',
  },
} as const;

export type Palette = typeof palette;

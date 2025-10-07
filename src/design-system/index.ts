/**
 * Cato Design System - Main Export
 * Exports all components, theme, and utilities
 */

// Theme exports
export { catoTheme, type CatoTheme } from './theme';
export { palette, type Palette } from './theme/palette';
export { typography, type Typography } from './theme/typography';
export { spacing, type Spacing } from './theme/spacing';

// Design System Components
export * from './components';

// Dashboard Components
export { default as SplitTunnelDashboard } from '../pages/SplitTunnelDashboard';
export { default as StoriesOverview } from '../pages/StoriesOverview';

// Utility exports
export * from './utils';

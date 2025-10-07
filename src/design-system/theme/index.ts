/**
 * Cato Design System - Main Theme
 * Combines all theme tokens into a cohesive MUI theme
 */

import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { spacing } from './spacing';

export const catoTheme = createTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    text: palette.text,
    background: palette.background,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    info: palette.info,
    grey: palette.grey,
    divider: palette.divider,
    action: palette.action,
  },
  
  typography: {
    fontFamily: typography.fontFamily,
    fontWeightLight: typography.fontWeightLight,
    fontWeightRegular: typography.fontWeightRegular,
    fontWeightMedium: typography.fontWeightMedium,
    fontWeightBold: typography.fontWeightBold,
    
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h5,
    h6: typography.h6,
    
    body1: typography.body1,
    body2: typography.body2,
    caption: typography.caption,
    button: typography.button,
    overline: typography.overline,
  },
  
  spacing: spacing.unit,
  
  // Component overrides
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.default,
          color: palette.text.primary,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        },
      },
    },
    
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.background.paper,
          borderRight: `1px solid ${palette.divider}`,
        },
      },
    },
    
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableHead-root': {
            backgroundColor: palette.background.section,
          },
        },
      },
    },
  },
  
  // Breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export type CatoTheme = typeof catoTheme;
export default catoTheme;

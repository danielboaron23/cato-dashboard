/**
 * Cato Design System - Spacing
 * Consistent spacing scale for margins, padding, and gaps
 */

export const spacing = {
  // Base spacing unit (8px)
  unit: 8,
  
  // Spacing scale
  xs: 4,    // 4px
  sm: 8,    // 8px
  md: 12,   // 12px
  lg: 16,   // 16px
  xl: 20,   // 20px
  xxl: 24,  // 24px
  xxxl: 32, // 32px
  xxxxl: 40, // 40px
  xxxxxl: 48, // 48px
  
  // Component-specific spacing
  component: {
    // Accordion spacing
    accordion: {
      padding: '3px 12px 3px 10px',
      contentPadding: '16px 12px',
      gap: 8,
      iconGap: 5,
    },
    
    // Alert spacing
    alert: {
      padding: 16,
      gap: 12,
      iconSize: 22,
    },
    
    // Button spacing
    button: {
      padding: '8px 16px',
      gap: 8,
    },
    
    // Card spacing
    card: {
      padding: 16,
      gap: 12,
    },
    
    // Dashboard spacing
    dashboard: {
      containerPadding: 24,
      cardGap: 16,
      sectionGap: 32,
    },
  },
  
  // Layout spacing
  layout: {
    section: 24,
    container: 16,
    grid: 16,
  },
} as const;

export type Spacing = typeof spacing;

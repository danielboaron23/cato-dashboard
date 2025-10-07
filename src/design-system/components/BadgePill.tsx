/**
 * BadgePill Component
 * Colored status/criticality badges
 */

import React from 'react';
import { Chip, ChipProps } from '@mui/material';

export interface BadgePillProps extends Omit<ChipProps, 'color'> {
  variant?: 'critical' | 'high' | 'medium' | 'low' | 'success' | 'warning' | 'error' | 'info';
  customColor?: string;
}

const BadgePill: React.FC<BadgePillProps> = ({
  variant = 'info',
  customColor,
  sx,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'critical':
        return {
          backgroundColor: '#D32F2F',
          color: 'white',
        };
      case 'high':
        return {
          backgroundColor: '#F57C00',
          color: 'white',
        };
      case 'medium':
        return {
          backgroundColor: '#FBC02D',
          color: 'black',
        };
      case 'low':
        return {
          backgroundColor: '#388E3C',
          color: 'white',
        };
      case 'success':
        return {
          backgroundColor: '#4CAF50',
          color: 'white',
        };
      case 'warning':
        return {
          backgroundColor: '#FF9800',
          color: 'white',
        };
      case 'error':
        return {
          backgroundColor: '#F44336',
          color: 'white',
        };
      case 'info':
      default:
        return {
          backgroundColor: '#2196F3',
          color: 'white',
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <Chip
      size="small"
      sx={{
        ...variantStyles,
        fontWeight: 500,
        ...(customColor && {
          backgroundColor: customColor,
          color: 'white',
        }),
        ...sx,
      }}
      {...props}
    />
  );
};

export default BadgePill;

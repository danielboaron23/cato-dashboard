/**
 * GaugeChart Component
 * Risk score gauge (0-100 with color zones)
 */

import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

export interface GaugeChartProps {
  value: number;
  max?: number;
  size?: number;
  thickness?: number;
  message?: string;
  color?: 'low' | 'medium' | 'high' | 'custom';
  customColor?: string;
  showValue?: boolean;
  showMessage?: boolean;
}

const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  max = 100,
  size = 120,
  thickness = 4,
  message,
  color = 'medium',
  customColor,
  showValue = true,
  showMessage = true,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const getColor = () => {
    if (customColor) return customColor;
    
    switch (color) {
      case 'low':
        return '#4CAF50'; // Green
      case 'medium':
        return '#FF9800'; // Orange
      case 'high':
        return '#F44336'; // Red
      default:
        return '#2196F3'; // Blue
    }
  };

  const getGradientColor = () => {
    if (customColor) return customColor;
    
    // Create gradient based on value
    if (percentage <= 33) return '#4CAF50'; // Green
    if (percentage <= 66) return '#FF9800'; // Orange
    return '#F44336'; // Red
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
        <CircularProgress
          variant="determinate"
          value={percentage}
          size={size}
          thickness={thickness}
          sx={{
            color: getGradientColor(),
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />
        {showValue && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {value}
            </Typography>
          </Box>
        )}
      </Box>
      
      {showMessage && message && (
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ maxWidth: 200 }}>
          {message}
        </Typography>
      )}
      
      {/* Color zones indicator */}
      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4CAF50' }} />
          <Typography variant="caption">Low</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FF9800' }} />
          <Typography variant="caption">Medium</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F44336' }} />
          <Typography variant="caption">High</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GaugeChart;

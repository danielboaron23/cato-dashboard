/**
 * CircularProgress Component
 * Small circular indicators with progress
 */

import React from 'react';
import { Box, Typography } from '@mui/material';

export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  color?: string;
  backgroundColor?: string;
  showValue?: boolean;
  children?: React.ReactNode;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max = 100,
  size = 40,
  color = '#2196F3',
  backgroundColor = '#E0E0E0',
  showValue = true,
  children,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - 4) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth="2"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.3s ease-in-out',
          }}
        />
      </svg>
      {showValue && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {children || (
            <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
              {value}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CircularProgress;

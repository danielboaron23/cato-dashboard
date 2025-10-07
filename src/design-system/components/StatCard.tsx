/**
 * StatCard Component
 * Reusable component for displaying statistics with icon, number, and label
 */

import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

export interface StatCardProps {
  icon: string;
  number: number | string;
  label: string;
  subtitle?: string;
  color?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  label,
  subtitle,
  color = '#2196F3',
  trend,
}) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" sx={{ fontSize: '2rem' }}>
            {icon}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color }}>
              {number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {label}
            </Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary">
                {subtitle}
              </Typography>
            )}
            {trend && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: trend.isPositive ? 'success.main' : 'error.main',
                    fontWeight: 500,
                  }}
                >
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;

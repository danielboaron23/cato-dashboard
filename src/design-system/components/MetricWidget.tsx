/**
 * MetricWidget Component
 * Container for charts, gauges, and other metric visualizations
 */

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export interface MetricWidgetProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  actions?: React.ReactNode;
}

const MetricWidget: React.FC<MetricWidgetProps> = ({
  title,
  children,
  subtitle,
  actions,
}) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
          {actions && (
            <Box>
              {actions}
            </Box>
          )}
        </Box>
        <Box>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricWidget;

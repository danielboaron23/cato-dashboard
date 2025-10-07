/**
 * DonutChart Component
 * Reusable donut chart with legend
 */

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export interface DonutChartData {
  name: string;
  value: number;
  color: string;
  percentage?: number;
}

export interface DonutChartProps {
  data: DonutChartData[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  showPercentage?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  height = 200,
  innerRadius = 40,
  outerRadius = 80,
  showLegend = true,
  showTooltip = true,
  showPercentage = false,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  const dataWithPercentage = data.map(item => ({
    ...item,
    percentage: Math.round((item.value / total) * 100),
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <Box sx={{ 
          bgcolor: 'background.paper', 
          p: 1, 
          borderRadius: 1, 
          boxShadow: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {data.name}
          </Typography>
          <Typography variant="body2">
            Value: {data.value}
          </Typography>
          {showPercentage && (
            <Typography variant="body2">
              Percentage: {data.percentage}%
            </Typography>
          )}
        </Box>
      );
    }
    return null;
  };

  return (
    <Box>
      <Box sx={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataWithPercentage}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={2}
              dataKey="value"
            >
              {dataWithPercentage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {showTooltip && <Tooltip content={<CustomTooltip />} />}
            {showLegend && <Legend />}
          </PieChart>
        </ResponsiveContainer>
      </Box>
      
      {showLegend && (
        <Box sx={{ mt: 2 }}>
          <Stack spacing={1}>
            {dataWithPercentage.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: item.color }} />
                  <Typography variant="body2">{item.name}</Typography>
                </Box>
                {showPercentage && (
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {item.percentage}%
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default DonutChart;

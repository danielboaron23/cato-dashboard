/**
 * DataTable Component
 * Sortable table with optional inline charts
 */

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Box,
  Typography,
} from '@mui/material';

export interface Column {
  id: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'right' | 'center';
  render?: (value: any, row: any) => React.ReactNode;
}

export interface DataTableProps {
  columns: Column[];
  data: any[];
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (columnId: string) => void;
  size?: 'small' | 'medium';
  stickyHeader?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  sortBy,
  sortDirection = 'asc',
  onSort,
  size = 'small',
  stickyHeader = false,
}) => {
  const [internalSortBy, setInternalSortBy] = useState(sortBy);
  const [internalSortDirection, setInternalSortDirection] = useState(sortDirection);

  const handleSort = (columnId: string) => {
    if (onSort) {
      onSort(columnId);
    } else {
      // Internal sorting
      if (internalSortBy === columnId) {
        setInternalSortDirection(internalSortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setInternalSortBy(columnId);
        setInternalSortDirection('asc');
      }
    }
  };

  const getCurrentSortBy = () => sortBy || internalSortBy;
  const getCurrentSortDirection = () => sortDirection || internalSortDirection;

  const sortedData = React.useMemo(() => {
    if (!getCurrentSortBy()) return data;

    return [...data].sort((a, b) => {
      const aValue = a[getCurrentSortBy()];
      const bValue = b[getCurrentSortBy()];
      
      if (aValue < bValue) {
        return getCurrentSortDirection() === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return getCurrentSortDirection() === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, getCurrentSortBy(), getCurrentSortDirection()]);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table size={size} stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                sortDirection={getCurrentSortBy() === column.id ? getCurrentSortDirection() : false}
              >
                {column.sortable !== false ? (
                  <TableSortLabel
                    active={getCurrentSortBy() === column.id}
                    direction={getCurrentSortBy() === column.id ? getCurrentSortDirection() : 'asc'}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {column.label}
                  </Typography>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index} hover>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {column.render ? column.render(row[column.id], row) : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

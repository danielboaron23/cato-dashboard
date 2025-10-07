/**
 * Cato Dashboard - Mock Data
 * Sample data for the dashboard components
 */

export interface KPICard {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: string;
}

export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar?: string;
}

export interface DashboardTransaction {
  id: string;
  user: string;
  amount: number;
  currency: string;
  type: 'income' | 'expense' | 'transfer';
  status: 'completed' | 'pending' | 'failed';
  date: string;
  description: string;
}

export interface DashboardActivity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  details: string;
}

// Mock KPI Data
export const mockKPIData: KPICard[] = [
  {
    id: '1',
    title: 'Total Users',
    value: '12,345',
    subtitle: 'Active users',
    trend: { value: 12.5, isPositive: true },
    icon: '👥',
  },
  {
    id: '2',
    title: 'Revenue',
    value: '$45,678',
    subtitle: 'This month',
    trend: { value: 8.2, isPositive: true },
    icon: '💰',
  },
  {
    id: '3',
    title: 'Orders',
    value: '1,234',
    subtitle: 'Pending orders',
    trend: { value: -2.1, isPositive: false },
    icon: '📦',
  },
  {
    id: '4',
    title: 'Conversion Rate',
    value: '3.2%',
    subtitle: 'Overall rate',
    trend: { value: 0.5, isPositive: true },
    icon: '📈',
  },
  {
    id: '5',
    title: 'Active Sessions',
    value: '2,456',
    subtitle: 'Current sessions',
    trend: { value: 15.3, isPositive: true },
    icon: '🔄',
  },
  {
    id: '6',
    title: 'Support Tickets',
    value: '89',
    subtitle: 'Open tickets',
    trend: { value: -5.2, isPositive: true },
    icon: '🎫',
  },
];

// Mock Users Data
export const mockUsersData: DashboardUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-15T10:30:00Z',
    avatar: '👨‍💼',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Manager',
    status: 'active',
    lastLogin: '2024-01-15T09:15:00Z',
    avatar: '👩‍💼',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'User',
    status: 'inactive',
    lastLogin: '2024-01-10T14:20:00Z',
    avatar: '👨‍🔧',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'User',
    status: 'pending',
    lastLogin: '2024-01-14T16:45:00Z',
    avatar: '👩‍🎨',
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'Manager',
    status: 'active',
    lastLogin: '2024-01-15T11:00:00Z',
    avatar: '👨‍💻',
  },
];

// Mock Transactions Data
export const mockTransactionsData: DashboardTransaction[] = [
  {
    id: '1',
    user: 'John Doe',
    amount: 1250.00,
    currency: 'USD',
    type: 'income',
    status: 'completed',
    date: '2024-01-15T10:30:00Z',
    description: 'Monthly subscription payment',
  },
  {
    id: '2',
    user: 'Jane Smith',
    amount: 89.99,
    currency: 'USD',
    type: 'expense',
    status: 'completed',
    date: '2024-01-15T09:15:00Z',
    description: 'Software license renewal',
  },
  {
    id: '3',
    user: 'Bob Johnson',
    amount: 500.00,
    currency: 'USD',
    type: 'transfer',
    status: 'pending',
    date: '2024-01-15T08:45:00Z',
    description: 'Account transfer',
  },
  {
    id: '4',
    user: 'Alice Brown',
    amount: 299.99,
    currency: 'USD',
    type: 'income',
    status: 'completed',
    date: '2024-01-14T16:30:00Z',
    description: 'Service fee payment',
  },
  {
    id: '5',
    user: 'Charlie Wilson',
    amount: 75.50,
    currency: 'USD',
    type: 'expense',
    status: 'failed',
    date: '2024-01-14T15:20:00Z',
    description: 'Domain renewal',
  },
];

// Mock Activity Data
export const mockActivityData: DashboardActivity[] = [
  {
    id: '1',
    user: 'John Doe',
    action: 'Login',
    timestamp: '2024-01-15T10:30:00Z',
    details: 'Logged in from Chrome on Windows',
  },
  {
    id: '2',
    user: 'Jane Smith',
    action: 'File Upload',
    timestamp: '2024-01-15T09:15:00Z',
    details: 'Uploaded document: project-proposal.pdf',
  },
  {
    id: '3',
    user: 'Bob Johnson',
    action: 'Settings Update',
    timestamp: '2024-01-15T08:45:00Z',
    details: 'Updated notification preferences',
  },
  {
    id: '4',
    user: 'Alice Brown',
    action: 'Password Change',
    timestamp: '2024-01-14T16:30:00Z',
    details: 'Password changed successfully',
  },
  {
    id: '5',
    user: 'Charlie Wilson',
    action: 'Data Export',
    timestamp: '2024-01-14T15:20:00Z',
    details: 'Exported user data to CSV',
  },
];

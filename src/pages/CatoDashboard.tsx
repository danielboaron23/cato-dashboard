/**
 * Cato Dashboard - Main Dashboard Screen
 * Built using existing MUI components and Cato Design System theme
 */

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  Stack,
  Button,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  ShoppingCart as CartIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import { catoTheme } from '../design-system';
import {
  mockKPIData,
  mockUsersData,
  mockTransactionsData,
  mockActivityData,
  type KPICard,
  type DashboardUser,
  type DashboardTransaction,
  type DashboardActivity,
} from '../mocks/catoDashboard';

const CatoDashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'inactive':
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
        return <CheckCircleIcon />;
      case 'pending':
        return <PendingIcon />;
      case 'inactive':
      case 'failed':
        return <ErrorIcon />;
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const filteredUsers = mockUsersData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTransactions = mockTransactionsData.filter(transaction =>
    transaction.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Cato Dashboard
        </Typography>
      </Toolbar>
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Users', icon: <PeopleIcon /> },
          { text: 'Transactions', icon: <MoneyIcon /> },
          { text: 'Orders', icon: <CartIcon /> },
        ].map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Cato Dashboard
          </Typography>
          
          <TextField
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mr: 2, minWidth: 200 }}
          />
          
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerOpen ? 250 : 0}px)` },
          ml: { sm: drawerOpen ? 0 : 0 },
          mt: '64px', // AppBar height
        }}
      >
        <Container maxWidth="xl">
          {/* KPI Cards Section */}
          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Key Performance Indicators
          </Typography>
          
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {mockKPIData.map((kpi) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={kpi.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                      <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem' }}>
                        {kpi.icon}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                          {kpi.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {kpi.title}
                        </Typography>
                      </Box>
                    </Stack>
                    
                    {kpi.subtitle && (
                      <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                        {kpi.subtitle}
                      </Typography>
                    )}
                    
                    {kpi.trend && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {kpi.trend.isPositive ? (
                          <TrendingUpIcon color="success" sx={{ fontSize: 16 }} />
                        ) : (
                          <TrendingDownIcon color="error" sx={{ fontSize: 16 }} />
                        )}
                        <Typography
                          variant="caption"
                          color={kpi.trend.isPositive ? 'success.main' : 'error.main'}
                          sx={{ fontWeight: 500 }}
                        >
                          {kpi.trend.isPositive ? '+' : ''}{kpi.trend.value}%
                        </Typography>
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Users Section */}
          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Recent Users
          </Typography>
          
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    User Management
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>User</TableCell>
                          <TableCell>Role</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Last Login</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                  {user.avatar}
                                </Avatar>
                                <Box>
                                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    {user.name}
                                  </Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {user.email}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">{user.role}</Typography>
                            </TableCell>
                            <TableCell>
                              <Chip
                                icon={getStatusIcon(user.status)}
                                label={user.status}
                                color={getStatusColor(user.status) as any}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {formatDate(user.lastLogin)}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Button size="small" variant="outlined">
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Recent Activity
                  </Typography>
                  <Stack spacing={2}>
                    {mockActivityData.slice(0, 5).map((activity) => (
                      <Box key={activity.id}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {activity.user} - {activity.action}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {activity.details}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                          {formatDate(activity.timestamp)}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Transactions Section */}
          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Recent Transactions
          </Typography>
          
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Transaction History
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>User</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {transaction.user}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            color={transaction.type === 'income' ? 'success.main' : 'error.main'}
                            sx={{ fontWeight: 500 }}
                          >
                            {transaction.type === 'income' ? '+' : '-'}
                            {formatCurrency(transaction.amount, transaction.currency)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={transaction.type}
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            icon={getStatusIcon(transaction.status)}
                            label={transaction.status}
                            color={getStatusColor(transaction.status) as any}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {formatDate(transaction.date)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {transaction.description}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default CatoDashboard;

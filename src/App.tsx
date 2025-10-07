/**
 * Cato Dashboard App - Main Application
 * Uses Cato Design System theme and components
 */

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { catoTheme } from './design-system';
import SplitTunnelDashboard from './pages/SplitTunnelDashboard';
import StoriesOverview from './pages/StoriesOverview';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <StoriesOverview />;
      case 'Access':
        return <SplitTunnelDashboard />;
      default:
        return <StoriesOverview />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {renderContent()}
    </div>
  );
}

export default App;

/**
 * Split Tunnel Policy Dashboard - React Component
 * Converted from HTML with exact styling and functionality
 */

import React, { useState } from 'react';
import { MyopContainer } from '@myop/react';
import TopNavigation from '../components/dashboard/TopNavigation';
import Sidebar from '../components/dashboard/Sidebar';
import ToggleSwitch from '../components/dashboard/ToggleSwitch';
import DataTable from '../components/dashboard/DataTable';
import { splitTunnelData } from '../data/splitTunnelData';
import './SplitTunnelDashboard.css';

const SplitTunnelDashboard: React.FC = () => {
  const [toggleEnabled, setToggleEnabled] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Access');

  const handleToggleSwitch = () => {
    setToggleEnabled(!toggleEnabled);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearch = (term: string) => {
    // Search functionality handled by DataTable component
    console.log('Search term:', term);
  };

  const handleNew = () => {
    console.log('New policy rule');
  };

  return (
    <div className="split-tunnel-dashboard">
      <MyopContainer componentId={"e9f7dc1b-4400-4470-9777-c699fad0d286"} />
      
      <TopNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <Sidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="main-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <a href="#">Access</a> / Split Tunnel Policy
        </nav>

        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Split Tunnel Policy</h1>
          <div className="header-controls">
            <ToggleSwitch 
              enabled={toggleEnabled}
              onToggle={handleToggleSwitch}
            />
            <button className="save-button">Save</button>
          </div>
        </header>

        <DataTable 
          data={splitTunnelData}
          onSearch={handleSearch}
          onNew={handleNew}
        />
      </main>
    </div>
  );
};

export default SplitTunnelDashboard;

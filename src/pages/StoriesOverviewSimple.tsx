/**
 * Stories Overview Dashboard - Simple Version
 * Integrated with existing SplitTunnelDashboard design
 */

import React, { useState } from 'react';

const StoriesOverviewSimple: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data for stories overview
  const storiesData = {
    total: 197,
    open: 60,
    inProgress: 40,
    closed: 90,
    resolved: 7,
    riskScore: 51,
    operationalStories: [
      { title: 'All Sites', count: 42, status: 'Sites Up', icon: '🏢', color: '#4CAF50' },
      { title: '3 Sites with Critical Open Stories', count: 17, status: 'Critical', icon: '⚠️', color: '#F44336' },
      { title: '5 Links with Recurring Stories', count: 5, status: 'Recurring', icon: '🔄', color: '#FF9800' },
      { title: 'with Recurring Shares', count: 1, status: 'Shares', icon: '🔗', color: '#2196F3' },
    ],
    topStories: [
      { indication: 'Site down', status: 'open', criticality: 'critical' },
      { indication: 'Multiple Entra Identity Alerts', status: 'in-progress', criticality: 'high' },
      { indication: 'DNS Queries to Phishing-Rela', status: 'open', criticality: 'high' },
      { indication: 'Suspicious PowerShell comm.', status: 'closed', criticality: 'medium' },
      { indication: 'HTTP traffic to low popularity.', status: 'resolved', criticality: 'low' },
    ],
    topSites: [
      { name: 'TLV', stories: 10, location: 'Tel Aviv' },
      { name: 'NY', stories: 8, location: 'New York' },
      { name: 'Boston', stories: 6, location: 'Boston' },
      { name: 'Los Angeles', stories: 5, location: 'Los Angeles' },
      { name: 'Tokyo', stories: 4, location: 'Tokyo' },
    ]
  };

  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case 'critical': return '#D32F2F';
      case 'high': return '#F57C00';
      case 'medium': return '#FBC02D';
      case 'low': return '#388E3C';
      default: return '#757575';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return '#F44336';
      case 'in-progress': return '#FF9800';
      case 'closed': return '#757575';
      case 'resolved': return '#4CAF50';
      default: return '#757575';
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="breadcrumb">
          <span>Accounts</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Stories</span>
        </div>
        
        <div className="header-content">
          <h1 className="dashboard-title">Stories Overview</h1>
          
          <div className="header-controls">
            <button className={`filter-btn ${activeFilter === 'Merged' ? 'active' : ''}`}>
              Merged
            </button>
            <button className={`filter-btn ${activeFilter === 'NSC' ? 'active' : ''}`}>
              NSC
            </button>
            <button className={`filter-btn ${activeFilter === 'SOC' ? 'active' : ''}`}>
              SOC
            </button>
            <button className="nav-btn">←</button>
            <span className="date-range">Last Day</span>
            <button className="nav-btn">→</button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-item">
          <span className="stats-number">{storiesData.total}</span>
          <span className="stats-label">Stories in Total</span>
        </div>
        
        <div className="stats-breakdown">
          <div className="stat-item">
            <div className="stat-indicator" style={{ backgroundColor: '#F44336' }}></div>
            <span>{storiesData.open} Open</span>
          </div>
          <div className="stat-item">
            <div className="stat-indicator" style={{ backgroundColor: '#FF9800' }}></div>
            <span>{storiesData.inProgress} In progress</span>
          </div>
          <div className="stat-item">
            <div className="stat-indicator" style={{ backgroundColor: '#757575' }}></div>
            <span>{storiesData.closed} Closed</span>
          </div>
          <div className="stat-item">
            <div className="stat-indicator" style={{ backgroundColor: '#4CAF50' }}></div>
            <span>{storiesData.resolved} Resolved</span>
          </div>
        </div>
      </div>

      {/* Operational Stories Cards */}
      <div className="operational-cards">
        {storiesData.operationalStories.map((story, index) => (
          <div key={index} className="operational-card">
            <div className="card-icon">{story.icon}</div>
            <div className="card-content">
              <div className="card-number" style={{ color: story.color }}>
                {story.count}
              </div>
              <div className="card-title">{story.title}</div>
              <div className="card-subtitle">{story.status}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="main-content">
        <div className="content-left">
          {/* Risk Score Gauge */}
          <div className="metric-widget">
            <h3>Account Risk Score</h3>
            <div className="gauge-container">
              <div className="gauge">
                <div className="gauge-value">{storiesData.riskScore}</div>
                <div className="gauge-label">/100</div>
              </div>
              <p className="gauge-message">
                You have 6 open stories in your account right now
              </p>
            </div>
          </div>

          {/* Top Stories by ISP */}
          <div className="metric-widget">
            <h3>Top Stories by ISP</h3>
            <div className="chart-container">
              <div className="donut-chart">
                <div className="chart-center">
                  <span className="chart-total">197</span>
                  <span className="chart-label">Total</span>
                </div>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#FF6B6B' }}></div>
                  <span>AT&T (12%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#4ECDC4' }}></div>
                  <span>Comcast (65%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#45B7D1' }}></div>
                  <span>Vodafone (25%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#96CEB4' }}></div>
                  <span>Verizon Fios (25%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#FFEAA7' }}></div>
                  <span>T-Mobile (25%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highest Criticality Stories */}
          <div className="metric-widget">
            <h3>Highest Criticality Stories</h3>
            <div className="stories-table">
              <table>
                <thead>
                  <tr>
                    <th>Indication</th>
                    <th>Status</th>
                    <th>Criticality</th>
                  </tr>
                </thead>
                <tbody>
                  {storiesData.topStories.map((story, index) => (
                    <tr key={index}>
                      <td>{story.indication}</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: getStatusColor(story.status) }}>
                          {story.status}
                        </span>
                      </td>
                      <td>
                        <span className="criticality-badge" style={{ backgroundColor: getCriticalityColor(story.criticality) }}>
                          {story.criticality}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="content-right">
          {/* Top Sites */}
          <div className="metric-widget">
            <h3>Top Sites</h3>
            <div className="sites-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Stories</th>
                  </tr>
                </thead>
                <tbody>
                  {storiesData.topSites.map((site, index) => (
                    <tr key={index}>
                      <td>
                        <div className="site-info">
                          <span className="site-icon">📍</span>
                          <div>
                            <div className="site-name">{site.name}</div>
                            <div className="site-location">{site.location}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="progress-container">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ 
                                width: `${(site.stories / 10) * 100}%`,
                                backgroundColor: '#F44336'
                              }}
                            ></div>
                          </div>
                          <span className="progress-value">{site.stories}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MITRE Techniques */}
          <div className="metric-widget">
            <h3>MITRE Techniques</h3>
            <div className="mitre-badges">
              <div className="mitre-badge">T1071 (45)</div>
              <div className="mitre-badge">T1078 (38)</div>
              <div className="mitre-badge">T1041 (32)</div>
              <div className="mitre-badge">T1059 (28)</div>
              <div className="mitre-badge">T1083 (24)</div>
              <div className="mitre-badge">T1055 (20)</div>
              <div className="mitre-badge">T1027 (16)</div>
              <div className="mitre-badge">T1033 (12)</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          padding: 20px;
          background-color: #f4f6f8;
          min-height: 100vh;
          margin-top: 56px; /* Account for fixed header */
        }

        .dashboard-header {
          margin-bottom: 24px;
        }

        .breadcrumb {
          margin-bottom: 8px;
          color: #666;
          font-size: 14px;
        }

        .breadcrumb-separator {
          margin: 0 8px;
        }

        .breadcrumb-current {
          color: #333;
          font-weight: 500;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dashboard-title {
          font-size: 28px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .header-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .filter-btn {
          padding: 8px 16px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .filter-btn.active {
          background: #158864;
          color: white;
          border-color: #158864;
        }

        .filter-btn:hover {
          background: #f8f9fa;
        }

        .nav-btn {
          padding: 8px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }

        .nav-btn:hover {
          background: #f8f9fa;
        }

        .date-range {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
        }

        .stats-bar {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .stats-item {
          display: flex;
          flex-direction: column;
        }

        .stats-number {
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }

        .stats-label {
          font-size: 14px;
          color: #666;
        }

        .stats-breakdown {
          display: flex;
          gap: 24px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .stat-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .operational-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }

        .operational-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .card-icon {
          font-size: 32px;
        }

        .card-number {
          font-size: 24px;
          font-weight: 600;
        }

        .card-title {
          font-size: 14px;
          color: #666;
          margin-bottom: 4px;
        }

        .card-subtitle {
          font-size: 12px;
          color: #999;
        }

        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .metric-widget {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .metric-widget h3 {
          margin: 0 0 16px 0;
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .gauge-container {
          text-align: center;
        }

        .gauge {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #4CAF50 0deg, #FF9800 180deg, #F44336 360deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gauge::before {
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: white;
        }

        .gauge-value {
          font-size: 32px;
          font-weight: 600;
          z-index: 1;
        }

        .gauge-message {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .chart-container {
          display: flex;
          gap: 20px;
        }

        .donut-chart {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(
            #FF6B6B 0deg 43deg,
            #4ECDC4 43deg 280deg,
            #45B7D1 280deg 360deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .donut-chart::before {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: white;
        }

        .chart-center {
          text-align: center;
          z-index: 1;
        }

        .chart-total {
          display: block;
          font-size: 20px;
          font-weight: 600;
        }

        .chart-label {
          font-size: 12px;
          color: #666;
        }

        .chart-legend {
          flex: 1;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .stories-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .stories-table th,
        .stories-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .stories-table th {
          background: #f8f9fa;
          font-weight: 600;
          font-size: 14px;
        }

        .status-badge,
        .criticality-badge {
          padding: 4px 8px;
          border-radius: 4px;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        .sites-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .sites-table th,
        .sites-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .sites-table th {
          background: #f8f9fa;
          font-weight: 600;
          font-size: 14px;
        }

        .site-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .site-name {
          font-weight: 500;
          font-size: 14px;
        }

        .site-location {
          font-size: 12px;
          color: #666;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .progress-bar {
          width: 60px;
          height: 8px;
          background: #eee;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          transition: width 0.3s ease;
        }

        .progress-value {
          font-size: 14px;
          font-weight: 500;
          min-width: 20px;
        }

        .mitre-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .mitre-badge {
          padding: 6px 12px;
          background: #e3f2fd;
          color: #1976d2;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .main-content {
            grid-template-columns: 1fr;
          }
          
          .stats-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          
          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default StoriesOverviewSimple;

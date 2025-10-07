/**
 * Stories Overview Dashboard - Integrated with existing design
 */

import React, { useState } from 'react';

const StoriesOverview: React.FC = () => {
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
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f4f6f8', 
      minHeight: '100vh',
      marginTop: '56px' // Account for fixed header
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ marginBottom: '8px', color: '#666', fontSize: '14px' }}>
          <span>Accounts</span>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#333', fontWeight: '500' }}>Stories</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '600', 
            color: '#333', 
            margin: 0 
          }}>
            Stories Overview
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              background: activeFilter === 'Merged' ? '#158864' : 'white',
              color: activeFilter === 'Merged' ? 'white' : '#333',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Merged
            </button>
            <button style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              background: activeFilter === 'NSC' ? '#158864' : 'white',
              color: activeFilter === 'NSC' ? 'white' : '#333',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              NSC
            </button>
            <button style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              background: activeFilter === 'SOC' ? '#158864' : 'white',
              color: activeFilter === 'SOC' ? 'white' : '#333',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              SOC
            </button>
            <button style={{
              padding: '8px',
              border: '1px solid #ddd',
              background: 'white',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>←</button>
            <span style={{ padding: '8px 16px', fontSize: '14px', fontWeight: '500' }}>
              Last Day
            </span>
            <button style={{
              padding: '8px',
              border: '1px solid #ddd',
              background: 'white',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>→</button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
            {storiesData.total}
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            Stories in Total
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F44336' }}></div>
            <span>{storiesData.open} Open</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF9800' }}></div>
            <span>{storiesData.inProgress} In progress</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#757575' }}></div>
            <span>{storiesData.closed} Closed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4CAF50' }}></div>
            <span>{storiesData.resolved} Resolved</span>
          </div>
        </div>
      </div>

      {/* Operational Stories Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {storiesData.operationalStories.map((story, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{ fontSize: '32px' }}>{story.icon}</div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: story.color }}>
                {story.count}
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {story.title}
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>
                {story.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }}>
        <div>
          {/* Risk Score Gauge */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
              Account Risk Score
            </h3>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                width: '120px',
                height: '120px',
                margin: '0 auto 16px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #4CAF50 0deg, #FF9800 180deg, #F44336 360deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'white'
                }}></div>
                <div style={{ fontSize: '32px', fontWeight: '600', zIndex: 1 }}>
                  {storiesData.riskScore}
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                You have 6 open stories in your account right now
              </p>
            </div>
          </div>

          {/* Top Stories by ISP */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
              Top Stories by ISP
            </h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'conic-gradient(#FF6B6B 0deg 43deg, #4ECDC4 43deg 280deg, #45B7D1 280deg 360deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'white'
                }}></div>
                <div style={{ textAlign: 'center', zIndex: 1 }}>
                  <div style={{ fontSize: '20px', fontWeight: '600' }}>197</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Total</div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF6B6B' }}></div>
                  <span>AT&T (12%)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4ECDC4' }}></div>
                  <span>Comcast (65%)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#45B7D1' }}></div>
                  <span>Vodafone (25%)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#96CEB4' }}></div>
                  <span>Verizon Fios (25%)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFEAA7' }}></div>
                  <span>T-Mobile (25%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highest Criticality Stories */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
              Highest Criticality Stories
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Indication</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Criticality</th>
                </tr>
              </thead>
              <tbody>
                {storiesData.topStories.map((story, index) => (
                  <tr key={index}>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{story.indication}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: getStatusColor(story.status)
                      }}>
                        {story.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: getCriticalityColor(story.criticality)
                      }}>
                        {story.criticality}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          {/* Top Sites */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
              Top Sites
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Name</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Stories</th>
                </tr>
              </thead>
              <tbody>
                {storiesData.topSites.map((site, index) => (
                  <tr key={index}>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px' }}>📍</span>
                        <div>
                          <div style={{ fontWeight: '500', fontSize: '14px' }}>{site.name}</div>
                          <div style={{ fontSize: '12px', color: '#666' }}>{site.location}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '60px', height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{
                            width: `${(site.stories / 10) * 100}%`,
                            height: '100%',
                            backgroundColor: '#F44336',
                            transition: 'width 0.3s ease'
                          }}></div>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '500', minWidth: '20px' }}>{site.stories}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MITRE Techniques */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
              MITRE Techniques
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1071 (45)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1078 (38)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1041 (32)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1059 (28)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1083 (24)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1055 (20)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1027 (16)
              </div>
              <div style={{ padding: '6px 12px', background: '#e3f2fd', color: '#1976d2', borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                T1033 (12)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesOverview;
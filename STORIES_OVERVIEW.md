# Stories Overview Dashboard

## Overview

The Stories Overview Dashboard is a comprehensive security monitoring interface that provides real-time insights into security stories, threats, and incidents across your organization's network infrastructure.

## Features

### 📊 Key Metrics
- **Total Stories**: 197 stories across all sites
- **Status Breakdown**: Open (60), In Progress (40), Closed (90), Resolved (7)
- **Risk Score**: Dynamic risk assessment with color-coded indicators
- **Operational Stories**: Site status, critical alerts, recurring issues

### 🎯 Operational Stories Cards
- **All Sites**: 42 sites currently operational
- **Critical Open Stories**: 17 critical alerts requiring immediate attention
- **Recurring Stories**: 5 links with recurring security issues
- **Recurring Shares**: 1 shared resource with ongoing concerns

### 📈 Data Visualizations

#### Account Risk Score (Gauge Chart)
- Circular gauge showing current risk level (51/100)
- Color-coded zones: Green (Low), Orange (Medium), Red (High)
- Contextual message: "You have 6 open stories in your account right now"

#### Top Stories by ISP (Donut Chart)
- Breakdown by Internet Service Provider
- AT&T (12%), Comcast (65%), Vodafone (25%), Verizon Fios (25%), T-Mobile (25%)
- Interactive legend with percentages

#### Top Stories by Induction (Donut Chart)
- Network Anomaly (40%)
- User Behavior (30%)
- System Alert (20%)
- External Threat (10%)

### 📋 Data Tables

#### Highest Criticality Stories
- Indication, Status, Criticality columns
- Color-coded criticality badges
- Status indicators with icons

#### Top Sites
- Site name, location, story count
- Horizontal progress bars showing relative activity
- Status indicators (Up/Warning/Down)

#### Top Users & Hosts
- User avatars, roles, and story counts
- Host names, types, and activity levels
- Interactive progress visualizations

### 🗺️ Global Map
- **Interactive World Map**: Leaflet-based map with custom markers
- **Location Pins**: Color-coded by criticality level
- **Country Summary**: Sidebar showing story distribution by country
- **Popup Details**: Click markers for detailed location information

### 🏷️ MITRE Technique Badges
- Circular badges for different MITRE ATT&CK techniques
- T1071 (Application Layer Protocol) - 45 stories
- T1078 (Valid Accounts) - 38 stories
- T1041 (Exfiltration Over C2 Channel) - 32 stories
- And more...

## Technical Implementation

### Dependencies
- **React 19.1.1**: Modern React with hooks
- **Material-UI 7.3.4**: Component library and theming
- **Recharts**: Chart library for data visualizations
- **React-Leaflet**: Interactive maps
- **TypeScript**: Type-safe development

### Components Architecture

#### Core Components
- `StoriesOverview`: Main dashboard container
- `StatCard`: Reusable statistics display
- `MetricWidget`: Chart and gauge containers
- `DataTable`: Sortable tables with inline charts
- `DonutChart`: Reusable donut chart component
- `GaugeChart`: Risk score visualization
- `BadgePill`: Status and criticality indicators

#### Design System Integration
- Consistent color palette
- Typography system
- Spacing and layout tokens
- Responsive grid system

### Data Structure

```typescript
interface StoryStats {
  total: number;
  open: number;
  inProgress: number;
  closed: number;
  resolved: number;
}

interface Story {
  id: string;
  indication: string;
  status: 'open' | 'in-progress' | 'closed' | 'resolved';
  criticality: 'low' | 'medium' | 'high' | 'critical';
  isp: string;
  site: string;
  user: string;
  host: string;
  location: {
    country: string;
    city: string;
    lat: number;
    lng: number;
  };
  mitreTechnique: string;
  timestamp: string;
}
```

### Navigation Integration
- **Home Tab**: Stories Overview Dashboard
- **Access Tab**: Split Tunnel Dashboard
- **Networks Tab**: Network management (future)
- **Users Tab**: User management (future)
- **Settings Tab**: Configuration (future)

## Usage

### Accessing the Dashboard
1. Click the "Home" tab in the top navigation
2. The Stories Overview dashboard will load automatically
3. Use the date navigation controls to filter by time period

### Interacting with Components
- **Charts**: Hover for detailed information
- **Map**: Click markers for location details
- **Tables**: Click column headers to sort
- **Filters**: Use the filter buttons (Merged, NSC, SOC)

### Responsive Design
- **Desktop**: Full grid layout with all components visible
- **Tablet**: Stacked layout with maintained functionality
- **Mobile**: Single-column layout optimized for touch

## Color Coding

### Criticality Levels
- 🔴 **Critical**: #D32F2F (Red)
- 🟠 **High**: #F57C00 (Orange)
- 🟡 **Medium**: #FBC02D (Yellow)
- 🟢 **Low**: #388E3C (Green)

### Status Indicators
- 🔴 **Open**: #F44336 (Red)
- 🟠 **In Progress**: #FF9800 (Orange)
- ⚫ **Closed**: #757575 (Grey)
- 🟢 **Resolved**: #4CAF50 (Green)

### Site Status
- 🟢 **Up**: #4CAF50 (Green)
- 🟠 **Warning**: #FF9800 (Orange)
- 🔴 **Down**: #F44336 (Red)

## Future Enhancements

### Planned Features
- Real-time data updates via WebSocket
- Advanced filtering and search capabilities
- Export functionality for reports
- Custom dashboard configuration
- Alert notifications and sound
- Dark mode support
- Accessibility improvements

### Performance Optimizations
- Virtual scrolling for large datasets
- Lazy loading of map tiles
- Memoization of expensive calculations
- Progressive loading of charts

## Development

### Running the Application
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Testing
```bash
npm run lint
npm test
```

## Contributing

1. Follow the existing code style and patterns
2. Add TypeScript types for all new components
3. Include proper error handling
4. Write tests for new functionality
5. Update documentation as needed

## Support

For issues or questions regarding the Stories Overview Dashboard, please refer to the main project documentation or contact the development team.

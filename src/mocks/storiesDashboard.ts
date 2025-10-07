/**
 * Stories Overview Dashboard - Mock Data
 * Sample data for the Stories Overview dashboard components
 */

export interface StoryStats {
  total: number;
  open: number;
  inProgress: number;
  closed: number;
  resolved: number;
}

export interface OperationalStory {
  id: string;
  title: string;
  count: number;
  status: string;
  icon: string;
  color: string;
}

export interface RiskScore {
  value: number;
  max: number;
  message: string;
  color: 'low' | 'medium' | 'high';
}

export interface ISPBreakdown {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

export interface Story {
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

export interface TopSite {
  name: string;
  stories: number;
  location: string;
  status: 'up' | 'down' | 'warning';
}

export interface TopUser {
  name: string;
  avatar: string;
  stories: number;
  role: string;
}

export interface TopHost {
  name: string;
  stories: number;
  type: string;
}

export interface MITRETechnique {
  id: string;
  name: string;
  count: number;
  icon: string;
  color: string;
}

export interface LocationData {
  country: string;
  city: string;
  lat: number;
  lng: number;
  stories: number;
  criticality: 'low' | 'medium' | 'high' | 'critical';
}

// Mock Data
export const mockStoryStats: StoryStats = {
  total: 197,
  open: 60,
  inProgress: 40,
  closed: 90,
  resolved: 7,
};

export const mockOperationalStories: OperationalStory[] = [
  {
    id: '1',
    title: 'All Sites',
    count: 42,
    status: 'Sites Up',
    icon: '🏢',
    color: '#4CAF50',
  },
  {
    id: '2',
    title: '3 Sites with Critical Open Stories',
    count: 17,
    status: 'Critical',
    icon: '⚠️',
    color: '#F44336',
  },
  {
    id: '3',
    title: '5 Links with Recurring Stories',
    count: 5,
    status: 'Recurring',
    icon: '🔄',
    color: '#FF9800',
  },
  {
    id: '4',
    title: 'with Recurring Shares',
    count: 1,
    status: 'Shares',
    icon: '🔗',
    color: '#2196F3',
  },
];

export const mockRiskScore: RiskScore = {
  value: 51,
  max: 100,
  message: 'You have 6 open stories in your account right now',
  color: 'medium',
};

export const mockISPBreakdown: ISPBreakdown[] = [
  { name: 'AT&T', count: 24, percentage: 12, color: '#FF6B6B' },
  { name: 'Comcast', count: 128, percentage: 65, color: '#4ECDC4' },
  { name: 'Vodafone', count: 49, percentage: 25, color: '#45B7D1' },
  { name: 'Verizon Fios', count: 49, percentage: 25, color: '#96CEB4' },
  { name: 'T-Mobile', count: 49, percentage: 25, color: '#FFEAA7' },
];

export const mockStories: Story[] = [
  {
    id: '1',
    indication: 'Suspicious Network Activity',
    status: 'open',
    criticality: 'high',
    isp: 'Comcast',
    site: 'New York Office',
    user: 'john.doe@company.com',
    host: 'NYC-SRV-01',
    location: { country: 'United States', city: 'New York', lat: 40.7128, lng: -74.0060 },
    mitreTechnique: 'T1071',
    timestamp: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    indication: 'Unauthorized Access Attempt',
    status: 'in-progress',
    criticality: 'critical',
    isp: 'AT&T',
    site: 'Los Angeles Branch',
    user: 'jane.smith@company.com',
    host: 'LAX-SRV-02',
    location: { country: 'United States', city: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    mitreTechnique: 'T1078',
    timestamp: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    indication: 'Data Exfiltration Detected',
    status: 'closed',
    criticality: 'medium',
    isp: 'Vodafone',
    site: 'London Office',
    user: 'bob.johnson@company.com',
    host: 'LON-SRV-03',
    location: { country: 'United Kingdom', city: 'London', lat: 51.5074, lng: -0.1278 },
    mitreTechnique: 'T1041',
    timestamp: '2024-01-14T16:45:00Z',
  },
  {
    id: '4',
    indication: 'Malware Detection',
    status: 'resolved',
    criticality: 'low',
    isp: 'Verizon Fios',
    site: 'Chicago Office',
    user: 'alice.brown@company.com',
    host: 'CHI-SRV-04',
    location: { country: 'United States', city: 'Chicago', lat: 41.8781, lng: -87.6298 },
    mitreTechnique: 'T1059',
    timestamp: '2024-01-14T14:20:00Z',
  },
  {
    id: '5',
    indication: 'Privilege Escalation',
    status: 'open',
    criticality: 'high',
    isp: 'T-Mobile',
    site: 'Seattle Office',
    user: 'charlie.wilson@company.com',
    host: 'SEA-SRV-05',
    location: { country: 'United States', city: 'Seattle', lat: 47.6062, lng: -122.3321 },
    mitreTechnique: 'T1078',
    timestamp: '2024-01-13T11:00:00Z',
  },
];

export const mockTopSites: TopSite[] = [
  { name: 'New York Office', stories: 45, location: 'New York, NY', status: 'up' },
  { name: 'Los Angeles Branch', stories: 32, location: 'Los Angeles, CA', status: 'warning' },
  { name: 'London Office', stories: 28, location: 'London, UK', status: 'up' },
  { name: 'Chicago Office', stories: 22, location: 'Chicago, IL', status: 'up' },
  { name: 'Seattle Office', stories: 18, location: 'Seattle, WA', status: 'down' },
  { name: 'Toronto Office', stories: 15, location: 'Toronto, CA', status: 'up' },
  { name: 'Sydney Office', stories: 12, location: 'Sydney, AU', status: 'up' },
  { name: 'Berlin Office', stories: 8, location: 'Berlin, DE', status: 'warning' },
];

export const mockTopUsers: TopUser[] = [
  { name: 'John Doe', avatar: '👨‍💼', stories: 25, role: 'Admin' },
  { name: 'Jane Smith', avatar: '👩‍💼', stories: 18, role: 'Manager' },
  { name: 'Bob Johnson', avatar: '👨‍🔧', stories: 15, role: 'Analyst' },
  { name: 'Alice Brown', avatar: '👩‍🎨', stories: 12, role: 'User' },
  { name: 'Charlie Wilson', avatar: '👨‍💻', stories: 10, role: 'Developer' },
];

export const mockTopHosts: TopHost[] = [
  { name: 'NYC-SRV-01', stories: 20, type: 'Server' },
  { name: 'LAX-SRV-02', stories: 18, type: 'Server' },
  { name: 'LON-SRV-03', stories: 15, type: 'Server' },
  { name: 'CHI-WRK-01', stories: 12, type: 'Workstation' },
  { name: 'SEA-WRK-02', stories: 10, type: 'Workstation' },
];

export const mockMITRETechniques: MITRETechnique[] = [
  { id: 'T1071', name: 'Application Layer Protocol', count: 45, icon: '🌐', color: '#FF6B6B' },
  { id: 'T1078', name: 'Valid Accounts', count: 38, icon: '👤', color: '#4ECDC4' },
  { id: 'T1041', name: 'Exfiltration Over C2 Channel', count: 32, icon: '📤', color: '#45B7D1' },
  { id: 'T1059', name: 'Command and Scripting Interpreter', count: 28, icon: '💻', color: '#96CEB4' },
  { id: 'T1083', name: 'File and Directory Discovery', count: 24, icon: '📁', color: '#FFEAA7' },
  { id: 'T1055', name: 'Process Injection', count: 20, icon: '💉', color: '#DDA0DD' },
  { id: 'T1027', name: 'Obfuscated Files or Information', count: 16, icon: '🔒', color: '#98D8C8' },
  { id: 'T1033', name: 'System Owner/User Discovery', count: 12, icon: '🔍', color: '#F7DC6F' },
];

export const mockLocationData: LocationData[] = [
  { country: 'United States', city: 'New York', lat: 40.7128, lng: -74.0060, stories: 45, criticality: 'high' },
  { country: 'United States', city: 'Los Angeles', lat: 34.0522, lng: -118.2437, stories: 32, criticality: 'critical' },
  { country: 'United Kingdom', city: 'London', lat: 51.5074, lng: -0.1278, stories: 28, criticality: 'medium' },
  { country: 'United States', city: 'Chicago', lat: 41.8781, lng: -87.6298, stories: 22, criticality: 'low' },
  { country: 'United States', city: 'Seattle', lat: 47.6062, lng: -122.3321, stories: 18, criticality: 'high' },
  { country: 'Canada', city: 'Toronto', lat: 43.6532, lng: -79.3832, stories: 15, criticality: 'medium' },
  { country: 'Australia', city: 'Sydney', lat: -33.8688, lng: 151.2093, stories: 12, criticality: 'low' },
  { country: 'Germany', city: 'Berlin', lat: 52.5200, lng: 13.4050, stories: 8, criticality: 'warning' },
  { country: 'Japan', city: 'Tokyo', lat: 35.6762, lng: 139.6503, stories: 6, criticality: 'low' },
  { country: 'Brazil', city: 'São Paulo', lat: -23.5505, lng: -46.6333, stories: 4, criticality: 'medium' },
];

export const mockInductionBreakdown = [
  { name: 'Network Anomaly', count: 78, percentage: 40, color: '#FF6B6B' },
  { name: 'User Behavior', count: 59, percentage: 30, color: '#4ECDC4' },
  { name: 'System Alert', count: 39, percentage: 20, color: '#45B7D1' },
  { name: 'External Threat', count: 21, percentage: 10, color: '#96CEB4' },
];

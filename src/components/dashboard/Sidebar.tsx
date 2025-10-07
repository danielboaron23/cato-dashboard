import React from 'react';
import {
  Activity,
  Settings,
  Link,
  Users,
  Download,
  Shield,
  GitBranch,
  Network,
  Server,
  Globe,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onToggle }) => {
  const sidebarItems = [
    {
      title: 'Monitor',
      items: [
        { icon: Activity, label: 'Dashboard', active: false },
        { icon: Settings, label: 'Settings', active: false },
      ]
    },
    {
      title: 'Access',
      items: [
        { icon: Link, label: 'Split Tunnel Policy', active: true },
        { icon: Users, label: 'Users', active: false },
        { icon: Download, label: 'Downloads', active: false },
      ]
    },
    {
      title: 'Security',
      items: [
        { icon: Shield, label: 'Firewall', active: false },
        { icon: GitBranch, label: 'VPN', active: false },
        { icon: Network, label: 'Network', active: false },
      ]
    },
    {
      title: 'Infrastructure',
      items: [
        { icon: Server, label: 'Servers', active: false },
        { icon: Globe, label: 'Sites', active: false },
        { icon: ShieldCheck, label: 'Certificates', active: false },
      ]
    }
  ];

  return (
    <aside className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      {sidebarItems.map((section, sectionIndex) => (
        <div key={sectionIndex} className="sidebar-section">
          <div className="section-title">{section.title}</div>
          {section.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
            >
              <item.icon className="sidebar-icon" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
import React from 'react';
import { Bell, HelpCircle, ChevronDown, User } from 'lucide-react';

interface TopNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  activeTab = "Home",
  onTabChange
}) => {
  const tabs = ['Home', 'Access', 'Networks', 'Users', 'Settings'];

  return (
    <nav className="top-navigation">
      <div className="nav-left">
        <div className="logo">Cato</div>
        <div className="nav-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => onTabChange?.(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="nav-right">
        <Bell className="nav-icon" />
        <HelpCircle className="nav-icon" />
        <div className="user-menu">
          <div className="user-avatar">
            <User size={16} />
          </div>
          <span>Admin</span>
          <ChevronDown size={16} className="nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
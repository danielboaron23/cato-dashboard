import React from 'react';
import { HelpCircle } from 'lucide-react';

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onToggle }) => {
  return (
    <div className="toggle-switch">
      <div className="toggle-label">
        <span>Enable Split Tunnel Policy</span>
        <HelpCircle size={14} />
      </div>
      <div 
        className={`toggle ${enabled ? 'enabled' : ''}`}
        onClick={onToggle}
      />
    </div>
  );
};

export default ToggleSwitch;
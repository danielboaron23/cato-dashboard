import React, { useState } from 'react';
import { Search, Plus, Users, Globe } from 'lucide-react';

interface PolicyRule {
  id: number;
  name: string;
  description: string;
  users: string[];
  criteria: {
    platform: string;
    sourceNetwork: string;
    country: string;
  };
  configuration: {
    tunnelMode: string;
    dnsServers: string;
  };
}

interface DataTableProps {
  data: PolicyRule[];
  onSearch?: (term: string) => void;
  onNew?: () => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onSearch, onNew }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch?.(term);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">Policy Rules</h2>
        <div className="table-controls">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search rules..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button className="new-button" onClick={onNew}>
            <Plus size={16} />
            New
          </button>
        </div>
      </div>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Users/Groups</th>
            <th>Criteria</th>
            <th>Configuration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rule) => (
            <tr key={rule.id}>
              <td>
                <div className="rule-number">{rule.id}</div>
              </td>
              <td>
                <div className="rule-name">{rule.name}</div>
              </td>
              <td>
                <div className="rule-description">{rule.description}</div>
              </td>
              <td>
                <div className="chips-container">
                  {rule.users.map((user, index) => (
                    <div key={index} className="chip">
                      <Users className="chip-icon" />
                      {user}
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <div className="criteria-container">
                  <div className="criteria-row">
                    <span className="criteria-label">Platform:</span>
                    <span className="criteria-value">{rule.criteria.platform}</span>
                  </div>
                  <div className="criteria-row">
                    <span className="criteria-label">Source Network:</span>
                    <span className="criteria-value">{rule.criteria.sourceNetwork}</span>
                  </div>
                  <div className="criteria-row">
                    <span className="criteria-label">Country:</span>
                    <span className="criteria-value">{rule.criteria.country}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="config-container">
                  <div className="config-row">
                    <span className="config-label">Tunnel Mode:</span>
                    <span className="config-value">{rule.configuration.tunnelMode}</span>
                  </div>
                  <div className="config-row">
                    <span className="config-label">DNS Servers:</span>
                    <span className="config-value">{rule.configuration.dnsServers}</span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
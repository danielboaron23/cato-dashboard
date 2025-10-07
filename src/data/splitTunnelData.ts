export interface PolicyRule {
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

export const splitTunnelData: PolicyRule[] = [
  {
    id: 1,
    name: "Default Rule",
    description: "Default split tunnel policy for all users",
    users: ["All Users"],
    criteria: {
      platform: "Any",
      sourceNetwork: "Any network",
      country: "Any"
    },
    configuration: {
      tunnelMode: "Full Tunnel",
      dnsServers: "Cato DNS"
    }
  },
  {
    id: 2,
    name: "Office Network",
    description: "Direct access for office network traffic",
    users: ["Office Users", "IT Team"],
    criteria: {
      platform: "Windows, macOS",
      sourceNetwork: "Office Network (192.168.1.0/24)",
      country: "Israel"
    },
    configuration: {
      tunnelMode: "Split Tunnel",
      dnsServers: "Local DNS"
    }
  },
  {
    id: 3,
    name: "Development Team",
    description: "Special access for development team",
    users: ["Dev Team", "QA Team"],
    criteria: {
      platform: "Any",
      sourceNetwork: "Any network",
      country: "Israel, UK"
    },
    configuration: {
      tunnelMode: "Split Tunnel",
      dnsServers: "Cato DNS + Google DNS"
    }
  },
  {
    id: 4,
    name: "Sales Team",
    description: "Direct access for sales applications",
    users: ["Sales Team"],
    criteria: {
      platform: "Windows, macOS, iOS",
      sourceNetwork: "Any network",
      country: "Any"
    },
    configuration: {
      tunnelMode: "Split Tunnel",
      dnsServers: "Cato DNS"
    }
  },
  {
    id: 5,
    name: "Remote Workers",
    description: "Policy for remote workers",
    users: ["Remote Workers"],
    criteria: {
      platform: "Any",
      sourceNetwork: "Home Networks",
      country: "Any"
    },
    configuration: {
      tunnelMode: "Full Tunnel",
      dnsServers: "Cato DNS"
    }
  },
  {
    id: 6,
    name: "Guest Access",
    description: "Limited access for guest users",
    users: ["Guest Users"],
    criteria: {
      platform: "Any",
      sourceNetwork: "Guest Network",
      country: "Any"
    },
    configuration: {
      tunnelMode: "Split Tunnel",
      dnsServers: "Public DNS"
    }
  }
];
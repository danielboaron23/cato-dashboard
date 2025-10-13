# Cato Dashboard

A comprehensive dashboard application for Cato Networks, featuring Stories Overview and Split Tunnel Management.

## 🚀 Features

### 🏠 Stories Overview Dashboard
- **Real-time Security Metrics**: 197 stories across all sites
- **Operational Stories**: Site status, critical alerts, recurring issues
- **Risk Assessment**: Dynamic risk scoring with visual indicators
- **Data Visualizations**: 
  - Account Risk Score Gauge (51/100)
  - Top Stories by ISP (Donut Chart)
  - Highest Criticality Stories Table
  - Top Sites with Progress Bars
  - MITRE Technique Badges

### 🔧 Split Tunnel Dashboard
- Network policy management
- Site configuration
- User access controls

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1, TypeScript
- **UI Framework**: Material-UI 7.3.4
- **Charts**: Recharts
- **Maps**: React-Leaflet
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design

## 📦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/cato-dashboard.git
cd cato-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── dashboard/      # Dashboard-specific components
├── design-system/      # Design system components
├── pages/             # Main pages
│   ├── StoriesOverview.html
│   └── SplitTunnelDashboard.html
├── mocks/             # Mock data
├── styles/            # CSS files
└── assets/            # Static assets
```

## 🎨 Design System

The project includes a comprehensive design system with:

- **StatCard**: Statistics display components
- **MetricWidget**: Chart and gauge containers
- **DataTable**: Sortable tables with inline charts
- **DonutChart**: Reusable donut chart component
- **GaugeChart**: Risk score visualization
- **BadgePill**: Status and criticality indicators

## 📊 Dashboard Components

### Stories Overview Features:
- **Header**: Accounts / Stories with filter buttons
- **Stats Bar**: 197 Stories in Total with color-coded indicators
- **Operational Cards**: 4 cards showing site status and alerts
- **Risk Score Gauge**: Circular gauge showing current risk level
- **ISP Breakdown**: Donut chart with provider distribution
- **Criticality Table**: Stories sorted by risk level
- **Top Sites**: Table with location-based story counts
- **MITRE Techniques**: Attack technique badges

### Color Coding:
- 🔴 **Critical**: #D32F2F (Red)
- 🟠 **High**: #F57C00 (Orange)
- 🟡 **Medium**: #FBC02D (Yellow)
- 🟢 **Low**: #388E3C (Green)

## 🌐 Live Demo

You can view the dashboard by opening the HTML files directly in your browser:
- **Stories Overview**: `src/pages/StoriesOverview.html`
- **Split Tunnel**: `src/pages/SplitTunnelDashboard.html`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with Figma design specifications
- Integrated with Cato Networks design system
- Uses modern React patterns and best practices
- Responsive design for all device types

## 👥 For Students & Contributors

### 🎓 Student Resources

- **[STUDENTS.md](./STUDENTS.md)** - Complete guide for students
- **[TASKS.md](./TASKS.md)** - List of tasks and assignments
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute to the project

### 🤝 How to Join

1. **Get Access**: Contact the project maintainer to be added as a collaborator
2. **Clone the Project**: `git clone https://github.com/danielboaron23/cato-dashboard.git`
3. **Read the Documentation**: Start with [STUDENTS.md](./STUDENTS.md)
4. **Pick a Task**: Choose from [TASKS.md](./TASKS.md)
5. **Start Contributing**: Follow the guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md)

### 📚 Learning Objectives

This project is designed to help students learn:
- Modern React development with TypeScript
- Component-based architecture
- Data visualization with charts and maps
- Git collaboration and version control
- Professional development practices

### 🎯 Project Goals

- **Educational**: Learn modern web development
- **Collaborative**: Work together on a real project
- **Practical**: Build a functional dashboard application
- **Professional**: Follow industry best practices

## 📞 Support

### For Students
- **GitHub Issues**: Report bugs or ask questions
- **Discussions**: General questions and ideas
- **Email**: Contact the project maintainer

### For General Support
For issues or questions regarding the Cato Dashboard, please refer to the main project documentation or contact the development team.

---

**Built with ❤️ for Cato Networks and Students**
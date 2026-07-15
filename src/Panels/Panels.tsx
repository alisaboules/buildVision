import { NavLink } from "react-router-dom";
import houseIcon from "../assets/house.svg";
import DashboardIcon from "../assets/dashboard.svg?react";
import ProjectsIcon from "../assets/projects.svg?react";
import ArInspectionIcon from "../assets/arInspection.svg?react";
import AiAnalysisIcon from "../assets/aiAnalysis.svg?react";
import ReportsIcon from "../assets/reports.svg?react";
import SettingsIcon from "../assets/setting.svg?react";
import { useLanguage } from "../Language/languageContext";

type MenuItem = {
  path: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const menuItems: MenuItem[] = [
  {
    path: "/dashboard",
    label: 'nav.dashboard',
    icon: DashboardIcon,
  },
  {
    path: "/projects",
    label: 'nav.projects',
    icon: ProjectsIcon
  },
  {
    path: "/arinspection",
    label: 'nav.arinspection',
    icon: ArInspectionIcon,
  },
  {
    path: "/aianalysis",
    label: 'nav.aianalysis',
    icon: AiAnalysisIcon
  },
  {
    path: "/reports",
    label: 'nav.reports',
    icon: ReportsIcon,
  },
  {
    path: "/settings",
    label: 'nav.settings',
    icon: SettingsIcon,
  },
];

function Panels() {
  const {t} = useLanguage();
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={houseIcon} className="mainIcon"/>

        <h1>BuildVision</h1>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon className="panelIcon" stroke="currentColor"/>
              <span>{t(item.label)}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-mini">
          <div className="avatar">AK</div>

          <div className="info">
            <span className="name">Алексей Корнев</span>
            <span className="email">kornev@mail.ru</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { Panels };
import { ActiveProject } from "./Components/ActiveProjects";
import { ReportsTable } from "./Components/ReportsTable";
import { StatCard } from "./Components/StatCard";
import { TopBar } from "../Panels/TopBar";
import Dashboard2Light from "../assets/dashboard2.svg";
import MinorLight from "../assets/minor.svg";
import MediumLight from "../assets/medium.svg";
import CriticalLight from "../assets/critical.svg";
import Dashboard2Dark  from "../assets/dashboard3.svg";
import MediumDark from "../assets/medium1.svg";
import MinorDark from "../assets/minor1.svg";
import CriticalDark from "../assets/critical1.svg";
import { useLanguage } from "../Language/languageContext";
import { useTheme } from "../Theme/ThemeContext";

function Dashboard() {
  const { t } = useLanguage();
  const { dark } = useTheme();
  return (
    <>
      <main className="main">
        <TopBar title={t('pages.dashboard')} />

        <section className="page active">
          <div className="stats-grid">
            <StatCard
              icon={ dark ? Dashboard2Dark : Dashboard2Light}
              title={t('dashboard.activeProjects')}
              value="4"
              subTitle={t("dashboard.activeProjectsSub")}
              className="active-p"
            />

            <StatCard
              icon={ dark ? MinorDark : MinorLight}
              title={t("dashboard.minorIssues")}
              value="7"
              subTitle={t("dashboard.minorIssuesSub")}
              className="minor-p"
            />

            <StatCard
              icon={ dark ? MediumDark : MediumLight}
              title={t("dashboard.mediumIssues")}
              value="8"
              subTitle={t("dashboard.mediumIssuesSub")}
              className="medium-p"
            />

            <StatCard
              icon={ dark ? CriticalDark : CriticalLight}
              title={t("dashboard.criticalIssues")}
              value="3"
              subTitle={t('dashboard.criticalIssuesSub')}
              className="critical-p"
            />
          </div>

          <div className="dashboard-grid">
            <ReportsTable />
            <ActiveProject />
          </div>
        </section>
      </main>
    </>
  );
}

export { Dashboard };

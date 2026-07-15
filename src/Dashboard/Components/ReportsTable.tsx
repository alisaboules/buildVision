import React from "react";
import { useLanguage } from "../../Language/languageContext";

interface Report {
  id: number;
  project: string;
  date: string;
  status: "issues" | "no-issues";
}

const reports: Report[] = [
  {
    id: 1,
    project: "Riverside Tower",
    date: "Jul 8, 2026",
    status: "issues",
  },
  {
    id: 2,
    project: "Metro Plaza",
    date: "Jun 18, 2026",
    status: "issues",
  },
  {
    id: 3,
    project: "Harbor Bridge",
    date: "Aug 8, 2025",
    status: "issues",
  },
  {
    id: 4,
    project: "Skyline Residences",
    date: "Feb 14, 2024",
    status: "no-issues",
  },
];


const ReportsTable: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="card">

      <div className="card-header">
        <h3>
          {t('dashboard.recentReports')}
        </h3>

        <span className="view-link">
          {t('dashboard.viewAll')}
        </span>
      </div>


      <div className="table-wrap">

        <table className="reports-table">

          <thead>
            <tr>
              <th>{t('table.report')}</th>
              <th>{t('table.project')}</th>
              <th>{t('table.date')}</th>
              <th>{t('table.status')}</th>
              <th></th>
            </tr>
          </thead>


          <tbody>

            {reports.map((report) => (
              <tr key={report.id} className="info-report">

                <td>
                  <strong>
                    #{report.id}
                  </strong>
                </td>


                <td>
                  {report.project}
                </td>


                <td>
                  {report.date}
                </td>


                <td>

                  <span
                    className={
                      report.status === "issues"
                        ? "status-chip issues"
                        : "status-chip no-issues"
                    }
                  >
                    {
                      report.status === "issues"
                        ? t('status.issuesFound')
                        : t('status.noIssues')
                    }
                  </span>

                </td>


                <td>
                  <button className="btn-view">
                    {t('button.view')}
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};


export { ReportsTable };
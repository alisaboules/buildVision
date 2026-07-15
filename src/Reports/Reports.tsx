import { useLanguage } from "../Language/languageContext";
import { TopBar } from "../Panels/TopBar";

function Reports() {
  const { t } = useLanguage();
  return (
    <>
      <TopBar title={t('pages.reports')} />
      <section className="page-reports">
            <div className="toolbar-filter-row">
                <div className="search-container">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" placeholder={t("reports.search")}/>
                </div>
            </div>
            <div className="card reports">
                <div className="table-wrap">
                    <table className="reports-table">
                        <thead>
                            <tr>
                              <th>{t("table.reportId")}</th>
                              <th>{t("table.project")}</th>
                              <th>{t("table.lastInspection")}</th>
                              <th>{t("table.inspector")}</th>
                              <th>{t("table.issues")}</th>
                              <th>{t("table.compliance")}</th>
                              <th>{t("table.status")}</th>
                              <th>{t("table.actions")}</th></tr>
                        </thead>
                        <tbody>
                            <tr className="info-report">
                              <td>
                                <strong>#1</strong>
                              </td>
                              <td>Riverside Tower</td>
                              <td>Jun 17, 2026</td>
                              <td>Alex Kornev</td>
                              <td>5</td>
                              <td>91%</td>
                              <td>
                                <span className="status-chip issues">{t("status.issuesFound")}</span>
                              </td>
                              <td>
                                <button className="btn-view">📥 PDF</button>
                              </td>
                            </tr>
                            <tr className="info-report">
                              <td>
                                <strong>#2</strong>
                              </td>
                              <td>Metro Plaza</td>
                              <td>Feb 14, 2026</td>
                              <td>Sarah Chen</td>
                              <td>10</td>
                              <td>79%</td>
                              <td>
                                <span className="status-chip issues">{t("status.issuesFound")}</span>
                              </td>
                              <td>
                                <button className="btn-view">📥 PDF</button>
                              </td>
                            </tr>
                            <tr className="info-report">
                              <td>
                                <strong>#3</strong>
                              </td>
                              <td>Central Station</td>
                              <td>Dec 4, 2024</td>
                              <td>Alex Kornev</td>
                              <td>15</td>
                              <td>65%</td>
                              <td>
                                <span className="status-chip issues">{t("status.issuesFound")}</span>
                              </td>
                              <td>
                                <button className="btn-view">📥 PDF</button>
                              </td>
                            </tr>
                            <tr className="info-report">
                              <td>
                                <strong>#4</strong>
                              </td>
                              <td>Skyline Residences</td>
                              <td>Sep 17, 2025</td>
                              <td>Mike Torres</td>
                              <td>7</td>
                              <td>87%</td>
                              <td>
                                <span className="status-chip issues">{t("status.issuesFound")}</span>
                              </td>
                              <td>
                                <button className="btn-view">📥 PDF</button>
                              </td>
                            </tr>
                            <tr className="info-report">
                              <td>
                                <strong>#5</strong>
                              </td>
                              <td>Harbor Bridge</td>
                              <td>Jul 21, 2026</td>
                              <td>Alex Kornev</td>
                              <td>0</td>
                              <td>100%</td>
                              <td>
                                <span className="status-chip no-issues">{t("status.noIssues")}</span>
                              </td>
                              <td>
                                <button className="btn-view">📥 PDF</button>
                              </td>
                            </tr>
                            <tr className="info-report">
                              <td>
                                <strong>#6</strong>
                              </td>
                              <td>Greenfield Hospital</td>
                              <td>Sep 27, 2026</td>
                              <td>Sarah Chen</td>
                              <td>9</td>
                              <td>84%</td>
                              <td>
                                <span className="status-chip issues">{t("status.issuesFound")}</span>
                              </td>
                              <td>
                                <button className="btn-view">📥 PDF</button>
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  );
}

export { Reports };
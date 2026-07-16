import "./Projects.css";
import { useState } from 'react';
import { Topbar } from '../Panels/Topbar/Topbar';
import plusIcon from '../assets/plus.svg';
import { useLanguage } from '../Language/languageContext';

const projects = [
  {
    id: 1,
    title: 'Riverside Tower',
    status: 'status.active',
    statusClass: 'active',
    description: 'project.riversideDesc',
    progress: 68,
    nextInspection: 'Jul, 14',
    lastInspection: 'Jun, 17',
    team: 15,
    color: '#059669',
  },
  {
    id: 2,
    title: 'Metro Plaza',
    status: 'status.active',
    statusClass: 'active',
    description: 'project.metroDesc',
    progress: 77,
    nextInspection: 'Jun, 24',
    lastInspection: 'Feb, 14',
    team: 8,
    color: '#059669',
  },
  {
    id: 3,
    title: 'Skyline Residences',
    status: 'status.completed',
    statusClass: 'completed',
    description: 'project.skylineDesc',
    progress: 100,
    nextInspection: 'Oct, 26',
    lastInspection: 'Sep, 17',
    team: 18,
    color: '#2563eb',
  },
  {
    id: 4,
    title: 'Harbor Bridge',
    status: 'status.completed',
    statusClass: 'completed',
    description: 'project.harborDesc',
    progress: 100,
    nextInspection: 'Jan, 11',
    lastInspection: 'Dec, 4',
    team: 21,
    color: '#2563eb',
  },
  {
    id: 5,
    title: 'Central Station',
    status: 'status.active',
    statusClass: 'active',
    description: 'project.centralDesc',
    progress: 43,
    nextInspection: 'Aug, 8',
    lastInspection: 'Jul, 21',
    team: 11,
    color: '#059669',
  },
  {
    id: 6,
    title: 'Greenfield Hospital',
    status: 'status.active',
    statusClass: 'active',
    description: 'project.greenFieldDesc',
    progress: 91,
    nextInspection: 'Nov, 30',
    lastInspection: 'Sep, 37',
    team: 12,
    color: '#059669',
  },
];

function Projects() {
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [letter, setLetter] = useState('');
  const { t } = useLanguage();
  return (
    <>
      <section className="page-projects">
        <Topbar title={t('pages.projects')} />
        <div className="toolbar-filter-row">
          <div className="filterandsearch">
            <div className="search-container">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input type="text" placeholder={t('projects.search')} />
            </div>

            <div className="filter-dropdowns">
              <div className="filter-wrapper">
                <select
                  className="filter-select-custom"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}>
                  <option value="" disabled hidden>
                    {t('projects.filterStatus')}
                  </option>
                  <option value="active">{t('projects.filterStatus1')}</option>
                  <option value="completed">{t('projects.filterStatus2')}</option>
                </select>
              </div>
              <div className="filter-wrapper">
                <select
                  className="filter-select-custom"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}>
                  <option value="" disabled hidden>
                    {t('projects.filterDate')}
                  </option>
                  <option value="newest">{t('projects.filterDate1')}</option>
                  <option value="oldest">{t('projects.filterDate2')}</option>
                </select>
              </div>
              <div className="filter-wrapper">
                <select
                  className="filter-select-custom"
                  onChange={(e) => setLetter(e.target.value)}
                  value={letter}>
                  <option value="" disabled hidden>
                    {t('projects.filterName')}
                  </option>
                  <option value="newest">{t('projects.filterName1')}</option>
                  <option value="oldest">{t('projects.filterName2')}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="div-action-primary">
            <button className="btn-projects-add">
              <img src={plusIcon} />
              <span>{t('projects.newProject')}</span>
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card-new" key={project.id}>
              <div>
                <div className="p-card-header">
                  <div className="p-card-title">{project.title}</div>

                  <span className={`p-card-badge ${project.statusClass}`}>{t(project.status)}</span>
                </div>

                <div className="p-card-body">
                  <p>{t(project.description)}</p>
                </div>
              </div>

              <div className="description-block" style={{ border: 'none', padding: 0 }}>
                <div className="meta-values-grid">
                  <div className="meta-value-box">
                    <span>{t('project.progress')}</span>
                    <strong>{project.progress}%</strong>
                  </div>

                  <div className="meta-value-box">
                    <span>{t('project.nextInspection')}</span>
                    <strong>{project.nextInspection}</strong>
                  </div>

                  <div className="meta-value-box">
                    <span>{t('project.lastInspection')}</span>
                    <strong>{project.lastInspection}</strong>
                  </div>

                  <div className="meta-value-box">
                    <span>{t('project.team')}</span>
                    <strong>{project.team}</strong>
                  </div>
                </div>

                <div className="progress-bar-wide">
                  <div
                    className="fill"
                    style={{
                      width: `${project.progress}%`,
                      background: project.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { Projects };

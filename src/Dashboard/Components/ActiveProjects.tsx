import React from "react";
import { ProgressCircle } from "./ProgressCircle";
import { ProgressBar } from "./ProgressBar";
import { useLanguage } from "../../Language/languageContext";



const ActiveProject: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="card active-project-section">
      <div className="card-active-project-header">
        <div className="section-title-inline">
          {t('dashboard.activeProject')}
        </div>
        <div className="project-big-title">
          Riverside Tower
        </div>
      </div>
      <div
        className="section-title-inline"
        style={{ marginTop: "8px" }}
      >
        {t('dashboard.bimCompliance')}
      </div>
      <div className="compliance-box">
        <ProgressCircle
          value={94}
        />
        <div className="compliance-bars">
          <div>
            <div className="bar-item-label">
              <span>{t('compliance.structural')}</span>
              <span>97%</span>
            </div>
            <ProgressBar
              value={97}
              color="#22c55e"
              className="mini-progress-bar"
            />
          </div>
          <div>
            <div className="bar-item-label">
              <span>{t('compliance.mep')}</span>
              <span>91%</span>
            </div>
            <ProgressBar
              value={91}
              color="#ef4444"
              className="mini-progress-bar"
            />
          </div>
          <div>
            <div className="bar-item-label">
              <span>{t('compliance.architectural')}</span>
              <span>95%</span>
            </div>

            <ProgressBar
              value={95}
              color="#eab308"
              className="mini-progress-bar"
            />
          </div>
        </div>
      </div>
      <div className="description-block">
        <h4>
          {t('dashboard.description')}
        </h4>
        <p>
          {t('project.riversideDesc')}
        </p>
        <div className="meta-values-grid">


          <div className="meta-value-box">
            <span>{t('project.progress')}</span>
            <strong>68%</strong>
          </div>


          <div className="meta-value-box">
            <span>{t('project.nextInspection')}</span>
            <strong>Jul, 14</strong>
          </div>


          <div className="meta-value-box">
            <span>{t('project.lastInspection')}</span>
            <strong>Jun, 17</strong>
          </div>


          <div className="meta-value-box">
            <span>{t('project.team')}</span>
            <strong>15</strong>
          </div>
        </div>
        <ProgressBar
          value={68}
          className="progress-bar-wide"
        />
      </div>
    </div>
  );
};


export { ActiveProject };
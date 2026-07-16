import "./AiAnalysis.css";
import { useLanguage } from '../Language/languageContext';
import { Topbar } from '../Panels/Topbar/Topbar';

function AiAnalysis() {
  const { t } = useLanguage();
  return (
    <>
      <Topbar title={t('pages.aianalysis')} />
      <section className="page-aianalysis">
        <div className="card arinspection">
          <div className="glass">🧠</div>
          <h3 className="texta">{t('ai.title')}</h3>
          <p className="ptext">{t('ai.description')}</p>
          <div className="block-analysis">
            <div className="part-an">
              <strong className="first-block">94.2%</strong>
              <span className="span-block">{t('ai.compliance')}</span>
            </div>
            <div className="part-an">
              <strong className="second-block">3</strong>
              <span className="span-block">{t('ai.critical')}</span>
            </div>
            <div className="part-an">
              <strong className="third-block">8</strong>
              <span className="span-block">{t('ai.medium')}</span>
            </div>
            <div className="part-an">
              <strong className="four-block">12</strong>
              <span className="span-block">{t('ai.minor')}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { AiAnalysis };

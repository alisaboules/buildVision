import { useLanguage } from "../Language/languageContext";
import { TopBar } from "../Panels/TopBar";

function ArInspection() {
  const { t } = useLanguage();
  return (
    <>
      <TopBar title={t('pages.arinspection')} />
      <section className="page-arinspection">
        <div className="card arinspection">
          <div className="glass">🥽</div>
          <h3 className="texta">{t("ar.title")}</h3>
          <p className="ptext">{t("ar.description")}</p>
          <button className="btn-action-primary">{t("ar.startScan")}</button>
          <div className="text2">
            <button className="btn-action-primary arinspection">{t("ar.showBIM")}</button>
            <button className="btn-action-primary arinspection">{t("ar.generateReport")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export { ArInspection };

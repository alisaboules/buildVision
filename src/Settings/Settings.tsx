import { useEffect, useState } from 'react';
import { useLanguage } from '../Language/languageContext';
import { TopBar } from '../Panels/TopBar';
import updateIcon from '../assets/update.svg';
import { useTheme } from '../Theme/ThemeContext';

function Settings() {
  const { t, lang, setLang } = useLanguage();
  const { dark, setDark } = useTheme();
  const [notification, setNotification] = useState(false);
  useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [dark]);
  return (
    <>
      <TopBar title={t('pages.settings')} />
      <section className="page-settings">
        <div className="settings-container-grid">
          <div className="card settings">
            <div className="card-header settings">
              <h3>{t("settings.userProfile")}</h3>
            </div>
            <div className="settings-block">
              <div className="avatar-large settings">
                AK
                <div className="edit-icon">
                  <img src={updateIcon} alt="Edit" />
                </div>
              </div>
            </div>
            <div className="form-row-two">
              <div className="input-field-group">
                <label>{t("settings.firstName")}</label>
                <input type="text" value="Alex" />
              </div>
              <div className="input-field-group">
                <label>{t("settings.lastName")}</label>
                <input type="text" value="Kornev" />
              </div>
            </div>
            <div className="form-row-two">
              <div className="input-field-group">
                <label>{t("settings.email")}</label>
                <input type="email" value="kornev@mail.ru" />
              </div>
              <div className="input-field-group">
                <label>{t("settings.role")}</label>
                <div className='filter-wrapper'>
                  <select className="filter-select-custom">
                    <option>{t("settings.architect")}</option>
                    <option>{t("settings.foreman")}</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn-action-primary settings">
              {t("button.save")}
            </button>
          </div>

          <div className="card settings">
            <div className="card-header settings">
              <h3>{t("settings.preferences")}</h3>
            </div>
            <div className="input-field-group">
              <label>{t("settings.language")}</label>
              <div className="filter-wrapper">
                <select id="settingsLangSelect" className="filter-select-custom"  value={lang}
  onChange={(e) => setLang(e.target.value as "en" | "ru")}>
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </div>
            <div className="toggle-row">
              <span>{t("settings.darkMode")}</span>
              <label className="switch">
                <input type="checkbox" id="themeToggle"
  checked={dark}
  onChange={() => setDark(!dark)} />
                <span className="slider"></span>
              </label>
            </div>
            <div className="input-field-group settings">
              <label>{t("settings.units")}</label>
              <div className="filter-wrapper">
                <select className="filter-select-custom">
                  <option>{t("settings.metric")}</option>
                  <option>{t("settings.imperial")}</option>
                </select>
              </div>
            </div>
            <div className="toggle-row">
              <span>{t("settings.notification")}</span>
              <label className="switch">
                <input type="checkbox" id="notificationToggle" checked={notification}
  onChange={() => setNotification(!notification)} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Settings };

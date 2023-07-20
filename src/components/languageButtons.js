import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageButtons = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'en',
      name: 'EN',
    },
    {
      code: 'es',
      name: 'ES',
    },
  ];
  return (
    <section className="sectionLag">
      <select
        className="sectionLag--select"
        defaultValue={i18n.resolvedLanguage}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        {languages.map(({ code, name }) => {
          return (
            <option key={code} value={code}>
              {name}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default LanguageButtons;

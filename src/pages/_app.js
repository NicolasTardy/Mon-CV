// src/pages/_app.js
import { useState, createContext, useContext } from "react";
import "../styles/globals.css";

export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("fr"); // "fr" par défaut

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {/* Sélecteur de langue */}
      <LanguageSwitcher />

      {/* Contenu de la page */}
      <Component {...pageProps} />
    </LanguageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div style={{ textAlign: "right", padding: "1rem" }}>
      <label htmlFor="language-select" style={{ marginRight: "0.5rem" }}>
        Langue / Language:
      </label>
      <select id="language-select" value={lang} onChange={handleChange}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default MyApp;
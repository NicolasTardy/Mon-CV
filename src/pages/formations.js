import { useContext } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Formations.module.css";

export default function Formations() {
  const { lang } = useContext(LanguageContext);

  const texts = {
    fr: {
      pageTitle: "Formations - Nicolas Tardy",
      description: "Parcours académique et diplômes obtenus par Nicolas Tardy.",
      mainTitle: "Formations",
      formations: [
        { period: "2011 – 2013", title: "Master de Management Opérationnel (Mention Très Bien)", institution: "ESSEC Business School, Cergy, La Défense" },
        { period: "1998", title: "BTS Action Commerciale (En alternance)", institution: "IRFA, Perpignan" },
        { period: "1996", title: "Sauveteur Secouriste en Haute Montagne", institution: "Centre National d’Entraînement Commando, Mont-Louis" },
        { period: "1995", title: "1ère Année d'Étude de Médecine", institution: "UFR Biologie, Montpellier" },
        { period: "1994", title: "Baccalauréat Série S (Option Mathématiques)", institution: "Lycée Jean Lurçat, Perpignan" }
      ],
      backLink: "Retour au Cube"
    },
    en: {
      pageTitle: "Education - Nicolas Tardy",
      description: "Academic background and degrees earned by Nicolas Tardy.",
      mainTitle: "Education",
      formations: [
        { period: "2011 – 2013", title: "Master in Operational Management (Distinction)", institution: "ESSEC Business School, Cergy, La Défense" },
        { period: "1998", title: "BTS in Business (Apprenticeship)", institution: "IRFA, Perpignan" },
        { period: "1996", title: "High Mountain First Responder", institution: "National Commando Training Center, Mont-Louis" },
        { period: "1995", title: "First Year of Medical Studies", institution: "UFR Biology, Montpellier" },
        { period: "1994", title: "Baccalauréat S (Math Option)", institution: "Lycée Jean Lurçat, Perpignan" }
      ],
      backLink: "Back to Cube"
    }
  };

  const t = lang === "fr" ? texts.fr : texts.en;

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.description} />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>{t.backLink}</Link>
          <h1 className={styles.title}>{t.mainTitle}</h1>
        </header>
        <section className={styles.formations}>
          {t.formations.map((formation, idx) => (
            <div key={idx} className={styles.formation}>
              <h3 className={styles.formationTitle}>
                {formation.period} : {formation.title}
              </h3>
              <p className={styles.institution}>{formation.institution}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
import { useContext } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Presentation.module.css";

export default function Presentation() {
  const { lang } = useContext(LanguageContext);

  const texts = {
    fr: {
      pageTitle: "Présentation - Nicolas Tardy",
      description: "Profil professionnel de Nicolas Tardy, expert en management et pilotage de projets stratégiques. Un atout pour votre entreprise.",
      mainTitle: "Profil Professionnel",
      intro: [
        "Plus de 20 ans d'expérience dans la distribution et les services.",
        "Expertise en management, négociation et pilotage de projets stratégiques.",
        "Transformation des défis en opportunités de succès."
      ],
      whatICanBringTitle: "Ce que je peux apporter",
      whatICanBring: [
        "Expertise en management opérationnel pour optimiser la performance des équipes.",
        "Innovation dans la création de partenariats stratégiques et d’offres sur mesure.",
        "Conduite de projets ambitieux, assurant une croissance durable et mesurable.",
        "Leadership inspirant et capacité à mobiliser des talents autour d'objectifs communs."
      ],
      achievementsTitle: "Mes Réalisations Clés",
      achievements: [
        "Lancement de services innovants chez FNAC DARTY et CASINO.",
        "Génération de millions d'euros de valeur ajoutée.",
        "Impact positif sur les résultats financiers.",
        "Animation d'équipes de plus de 300 collaborateurs.",
        "Conduite de projets nationaux d'envergure."
      ],
      overviewTitle: "Mon Parcours en Un Coup d'Œil",
      overview: [
        "Expérience allant de la gestion d'opérations en hypermarchés à la direction d'offres de services complexes.",
        "Capacité à transformer les défis en opportunités de croissance et d'innovation."
      ],
      backLink: "Retour au Cube"
    },
    en: {
      pageTitle: "Presentation - Nicolas Tardy",
      description: "Professional profile of Nicolas Tardy, an expert in management and strategic project leadership. A valuable asset for your company.",
      mainTitle: "Professional Profile",
      intro: [
        "Over 20 years of experience in retail and services.",
        "Expertise in management, negotiation, and strategic project leadership.",
        "Turning challenges into opportunities for success."
      ],
      whatICanBringTitle: "What I Can Bring",
      whatICanBring: [
        "Operational management expertise to optimize team performance.",
        "Innovation in creating strategic partnerships and tailored offerings.",
        "Leading ambitious projects ensuring sustainable growth.",
        "Inspiring leadership with the ability to mobilize talent around common goals."
      ],
      achievementsTitle: "Key Achievements",
      achievements: [
        "Launch of innovative services at FNAC DARTY and CASINO.",
        "Generation of millions in added value.",
        "Positive impact on financial performance.",
        "Managing teams of over 300 employees.",
        "Leading large-scale national projects."
      ],
      overviewTitle: "A Glance at My Journey",
      overview: [
        "Experience ranging from managing hypermarket operations to directing complex service offerings.",
        "Ability to turn challenges into opportunities for growth and innovation."
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
        <section className={styles.intro}>
          {t.intro.map((line, idx) => (
            <p key={idx} className={styles.paragraph}>{line}</p>
          ))}
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.whatICanBringTitle}</h2>
          <ul className={styles.list}>
            {t.whatICanBring.map((item, idx) => (
              <li key={idx} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.achievementsTitle}</h2>
          <ul className={styles.list}>
            {t.achievements.map((item, idx) => (
              <li key={idx} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.overviewTitle}</h2>
          <ul className={styles.list}>
            {t.overview.map((item, idx) => (
              <li key={idx} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
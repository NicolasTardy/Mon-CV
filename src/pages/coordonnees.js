import { useContext } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Coordonnees.module.css";

export default function Coordonnees() {
  const { lang } = useContext(LanguageContext);

  const texts = {
    fr: {
      pageTitle: "Coordonnées - Nicolas Tardy",
      description: "Les coordonnées de contact de Nicolas Tardy.",
      mainTitle: "Coordonnées",
      contact: {
        adresse: "Paris/Caen",
        telephone: "+33 6 79 78 48 06",
        email: "nicolas.tardy1@gmail.com",
        linkedin: "linkedin.com/in/nicolas-tardy-9025a654"
      },
      extra: [
        "Disponible pour de nouvelles opportunités et collaborations."
      ],
      backLink: "Retour au Cube"
    },
    en: {
      pageTitle: "Contact - Nicolas Tardy",
      description: "Contact details for Nicolas Tardy.",
      mainTitle: "Contact Information",
      contact: {
        adresse: "Paris/Caen",
        telephone: "+33 6 79 78 48 06",
        email: "nicolas.tardy1@gmail.com",
        linkedin: "linkedin.com/in/nicolas-tardy-9025a654"
      },
      extra: [
        "Available for new opportunities and collaborations."
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
        <section className={styles.contact}>
          <p><strong>Adresse :</strong> {t.contact.adresse}</p>
          <p><strong>Téléphone :</strong> {t.contact.telephone}</p>
          <p><strong>Email :</strong> {t.contact.email}</p>
          <p><strong>LinkedIn :</strong> {t.contact.linkedin}</p>
        </section>
        <section className={styles.extra}>
          {t.extra.map((line, idx) => (
            <p key={idx} className={styles.paragraph}>{line}</p>
          ))}
        </section>
      </div>
    </>
  );
}
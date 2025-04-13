import { useContext } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Experiences.module.css";

export default function Experiences() {
  const { lang } = useContext(LanguageContext);

  const texts = {
    fr: {
      pageTitle: "Expériences Professionnelles - Nicolas Tardy",
      description: "Parcours professionnel de Nicolas Tardy dans la distribution et les services.",
      mainTitle: "Expériences Professionnelles",
      intro: [
        "Plus de 20 ans d'expérience dans la distribution et les services."
      ],
      experiences: [
        { period: "Depuis décembre 2021", title: "Directeur de l’Offre de Services Foyer et de la réparation", company: "Groupe FNAC DARTY" },
        { period: "Mars 2018 – Décembre 2021", title: "Directeur des Services Marchands et des partenariats", company: "CASINO Distribution France" },
        { period: "Janvier 2017 – Mars 2018", title: "Directeur des Ventes Services Groupe", company: "Groupe FNAC DARTY" },
        { period: "Août 2013 – Février 2017", title: "Directeur des Ventes (Directeur Régional)", company: "DARTY" },
        { period: "Janvier 2009 – Août 2013", title: "Chargé du Développement des Ventes", company: "DARTY" },
        { period: "Novembre 2005 – Janvier 2009", title: "Directeur de Magasin", company: "DARTY" },
        { period: "Août 2002 – Août 2005", title: "Chef de Secteur des Services Clients", company: "LEROY MERLIN" },
        { period: "Juillet 2001 – Août 2002", title: "Directeur de Restaurant", company: "MC DONALD’S" },
        { period: "Juin 2000 – Août 2001", title: "Directeur de Magasin", company: "PARASHOP" },
        { period: "Septembre 1999 – Juin 2000", title: "Chef de Rayons", company: "DECATHLON" }
      ],
      backLink: "Retour au Cube"
    },
    en: {
      pageTitle: "Work Experience - Nicolas Tardy",
      description: "Professional journey of Nicolas Tardy in retail and services.",
      mainTitle: "Work Experience",
      intro: [
        "Over 20 years of experience in retail and services."
      ],
      experiences: [
        { period: "Since December 2021", title: "Director of Home Services and Repairs", company: "Groupe FNAC DARTY" },
        { period: "March 2018 – December 2021", title: "Director of Merchant Services and Partnerships", company: "CASINO Distribution France" },
        { period: "January 2017 – March 2018", title: "Group Sales Director", company: "Groupe FNAC DARTY" },
        { period: "August 2013 – February 2017", title: "Sales Director (Regional Director)", company: "DARTY" },
        { period: "January 2009 – August 2013", title: "Sales Development Manager", company: "DARTY" },
        { period: "November 2005 – January 2009", title: "Store Manager", company: "DARTY" },
        { period: "August 2002 – August 2005", title: "Customer Service Section Manager", company: "LEROY MERLIN" },
        { period: "July 2001 – August 2002", title: "Restaurant Manager", company: "MC DONALD’S" },
        { period: "June 2000 – August 2001", title: "Store Manager", company: "PARASHOP" },
        { period: "September 1999 – June 2000", title: "Department Manager", company: "DECATHLON" }
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
        <section className={styles.experiences}>
          {t.experiences.map((exp, idx) => (
            <div key={idx} className={styles.experience}>
              <h3 className={styles.expTitle}>
                {exp.period} : {exp.title}
              </h3>
              <p className={styles.expCompany}>{exp.company}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
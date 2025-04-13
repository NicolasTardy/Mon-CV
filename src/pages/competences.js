import { useContext } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Competences.module.css";

export default function Competences() {
  const { lang } = useContext(LanguageContext);

  // Textes en fonction de la langue
  const texts = {
    fr: {
      pageTitle: "Compétences Techniques - Nicolas Tardy",
      description: "Découvrez mes compétences techniques acquises en plus de 20 ans d'expérience.",
      mainTitle: "Compétences Techniques",
      // Texte d'introduction global sur le parcours
      introduction: "Professionnel avec plus de 20 ans d'expérience dans la distribution et les services, j'ai développé une expertise reconnue en management, négociation et pilotage de projets stratégiques. Mon parcours m'a permis de manager des réseaux intégrés et franchisés, tout en collaborant avec des équipes jusqu'à 300 collaborateurs. Convaincu que la réussite repose sur la mobilisation des talents et la satisfaction client, j’ai contribué à la création d'offres adaptées aux attentes du marché et à la mise en place de partenariats structurants. Mes réalisations incluent la création d'offres phares comme DartyMax et la conception de produits financiers tels que la carte bancaire Casino, développée avec FLOA Banque. Avec mon équipe, nous avons également conçu des solutions d'assurance innovantes intégrant des services différenciants comme l'assistance routière et le buy-back.",
      // Texte d'introduction général (courte phrase)
      intro: [
        "Expertises acquises au cours de plus de 20 ans d'expérience dans la distribution et les services."
      ],
      // Listes de compétences par catégories
      managementTitle: "Management",
      managementSkills: [
        "Leadership",
        "Coaching",
        "Animation de réseau",
        "Gestion multi-sites"
      ],
      projectsTitle: "Gestion de Projets",
      projectSkills: [
        "Conception et déploiement d'offres",
        "Négociation de partenariats",
        "Stratégies multicanales",
        "Stratégie SEA/SEO"
      ],
      itTitle: "Informatique",
      itSkills: [
        "Excel",
        "Word",
        "PowerPoint",
        "Photoshop",
        "Illustrator",
        "Python",
        "Création d’applications web (Next.js)"
      ],
      languagesTitle: "Langues",
      languages: [
        "Français (natif)",
        "Anglais (niveau B2)"
      ],
      digitalToolsTitle: "Outils Digitaux",
      digitalTools: [
        "Usage et maîtrise de ChatGPT 4",
        "Claude",
        "Kling AI"
      ],
      backLink: "Retour au Cube"
    },
    en: {
      pageTitle: "Technical Skills - Nicolas Tardy",
      description: "Discover my technical skills acquired over more than 20 years.",
      mainTitle: "Technical Skills",
      introduction: "With over 20 years of experience in retail and services, I have developed recognized expertise in management, negotiation, and strategic project leadership. My career has enabled me to manage integrated and franchised networks while collaborating with teams of up to 300 employees. Convinced that success relies on mobilizing talent and customer satisfaction, I have contributed to creating offerings tailored to market demands and establishing structuring partnerships. My achievements include the creation of flagship offers such as DartyMax and the design of financial products like the Casino bank card developed with FLOA Banque. Together with my team, we have also designed innovative insurance solutions incorporating differentiating services such as roadside assistance and buy-back.",
      intro: [
        "Expertise acquired over more than 20 years in retail and services."
      ],
      managementTitle: "Management",
      managementSkills: [
        "Leadership",
        "Coaching",
        "Network Animation",
        "Multi-site Management"
      ],
      projectsTitle: "Project Management",
      projectSkills: [
        "Design and deployment of offerings",
        "Partnership negotiation",
        "Multichannel strategies",
        "SEA/SEO strategy"
      ],
      itTitle: "IT",
      itSkills: [
        "Excel",
        "Word",
        "PowerPoint",
        "Photoshop",
        "Illustrator",
        "Python",
        "Web app creation (Next.js)"
      ],
      languagesTitle: "Languages",
      languages: [
        "French (native)",
        "English (B2 level)"
      ],
      digitalToolsTitle: "Digital Tools",
      digitalTools: [
        "Use and mastery of ChatGPT 4",
        "Claude",
        "Kling AI"
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
        <section className={styles.fullIntroduction}>
          <p className={styles.introduction}>{t.introduction}</p>
        </section>
        <section className={styles.intro}>
          {t.intro.map((line, idx) => (
            <p key={idx} className={styles.paragraph}>{line}</p>
          ))}
        </section>
        <section className={styles.sections}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.managementTitle}</h2>
            <ul className={styles.list}>
              {t.managementSkills.map((skill, idx) => (
                <li key={idx} className={styles.listItem}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.projectsTitle}</h2>
            <ul className={styles.list}>
              {t.projectSkills.map((skill, idx) => (
                <li key={idx} className={styles.listItem}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.itTitle}</h2>
            <ul className={styles.list}>
              {t.itSkills.map((skill, idx) => (
                <li key={idx} className={styles.listItem}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.languagesTitle}</h2>
            <ul className={styles.list}>
              {t.languages.map((lang, idx) => (
                <li key={idx} className={styles.listItem}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.digitalToolsTitle}</h2>
            <ul className={styles.list}>
              {t.digitalTools.map((tool, idx) => (
                <li key={idx} className={styles.listItem}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
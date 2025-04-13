import { useContext } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Interets.module.css";

export default function Interets() {
  const { lang } = useContext(LanguageContext);

  const texts = {
    fr: {
      pageTitle: "Centres d’Intérêt - Nicolas Tardy",
      description:
        "Passions : le sport, l'apprentissage via les IA, l'inspiration de mes trois fils. Engagement pour l'égalité femmes-hommes.",
      mainTitle: "Centres d’Intérêt",
      intro: [
        "Passionné par le sport, l'apprentissage continu via les IA (🤖) et la technologie.",
        "Inspiré par mes trois fils, ingénieurs et spécialistes du digital.",
        "Défenseur de l’égalité femmes-hommes comme pilier du progrès collectif.",
        "Membre de l’association « La Fabrique » - Groupe Casino."
      ],
      interests: [
        {
          title: "La Passion du Sport",
          details: [
            "Pratique du krav maga depuis 2002",
            "Initiateur fédéral de boxe française et disciplines associées",
            "Plusieurs finalistes des championnats de France d’épreuves combinées (athlétisme)",
            "Valeurs apportées : discipline, efforts, courage et esprit d'équipe"
          ]
        },
        {
          title: "IA & Apprentissage Continu",
          details: [
            "Utilisation d’outils d’IA (ChatGPT 4, Claude, Kling AI) pour améliorer la productivité et générer des idées",
            "Enrichissement des connaissances et optimisation de l'expertise"
          ]
        },
        {
          title: "L'Influence de Mes Trois Fils",
          details: [
            "Aide à la compréhension du monde technologique actuel",
            "Adaptation, curiosité et vision professionnelle enrichie"
          ]
        },
        {
          title: "Codage & Développement",
          details: [
            "Découverte et apprentissage des méthodes de codage (Python, Next.js)"
          ]
        }
      ],
      backLink: "Retour au Cube"
    },
    en: {
      pageTitle: "Interests - Nicolas Tardy",
      description:
        "Passions: sports, AI-driven learning, and inspiration from his three sons. Committed to gender equality.",
      mainTitle: "Interests",
      intro: [
        "Passionate about sports, continuous learning via AI (🤖) and technology.",
        "Inspired by his three sons, digital engineering experts.",
        "Advocate for gender equality as a cornerstone of collective progress.",
        "Member of the 'La Fabrique' association – Groupe Casino."
      ],
      interests: [
        {
          title: "Passion for Sports",
          details: [
            "Practices krav maga since 2002",
            "Founding organizer of French boxing and related disciplines",
            "Multiple finalists in French combined events championships (athletics)",
            "Values: discipline, effort, courage, and team spirit"
          ]
        },
        {
          title: "AI & Continuous Learning",
          details: [
            "Uses AI tools (ChatGPT 4, Claude, Kling AI) to boost productivity and spark ideas",
            "Enhances knowledge and optimizes expertise"
          ]
        },
        {
          title: "Influence of My Three Sons",
          details: [
            "Aids in understanding the current technological landscape",
            "Promotes adaptation, curiosity, and an enriched professional vision"
          ]
        },
        {
          title: "Coding & Development",
          details: [
            "Discovery and learning of coding methods (Python, Next.js)"
          ]
        }
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
        <section className={styles.interests}>
          {t.interests.map((interest, idx) => (
            <div key={idx} className={styles.interestSection}>
              <h2 className={styles.interestTitle}>{interest.title}</h2>
              <ul className={styles.list}>
                {interest.details.map((detail, index) => (
                  <li key={index} className={styles.listItem}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
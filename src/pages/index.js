import { useContext, useRef, useState, useEffect } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/HomeCube.module.css";

export default function Home() {
  const { lang } = useContext(LanguageContext);

  // Textes en français et anglais (adaptés à la nouvelle identité lumineuse)
  const texts = {
    fr: {
      pageTitle: "Mon CV - Nicolas Tardy",
      heading: "Bienvenue sur mon CV interactif !",
      subheading:
        "Déplacez simplement la souris dans la zone pastel pour donner de l'élan au cube. Plus vous bougez vite, plus il tournera rapidement !",
      navTitle: "Accès rapide :",
      presentations: "Présentation",
      competences: "Compétences",
      coordonnees: "Coordonnées",
      experiences: "Expériences",
      formations: "Formations",
      interets: "Centres d'Intérêt",
      downloadTitle: "Téléchargez mes CV :",
      downloadClassic: "Classique (FR)",
      downloadFun: "Fun (Comics)",
      downloadEnglish: "Anglais (bientôt)"
    },
    en: {
      pageTitle: "My Resume - Nicolas Tardy",
      heading: "Welcome to my interactive resume!",
      subheading:
        "Simply move your mouse within the pastel area to spin the cube. The faster you move, the faster it rotates!",
      navTitle: "Quick Access:",
      presentations: "Presentation",
      competences: "Technical Skills",
      coordonnees: "Contact",
      experiences: "Work Experience",
      formations: "Education",
      interets: "Interests",
      downloadTitle: "Download my resumes:",
      downloadClassic: "Classic (FR)",
      downloadFun: "Fun (Comics)",
      downloadEnglish: "English (coming soon)"
    }
  };

  const t = lang === "fr" ? texts.fr : texts.en;

  // État pour la rotation du cube
  const [rotateX, setRotateX] = useState(-10);
  const [rotateY, setRotateY] = useState(20);

  // Gestion de la vitesse (inertie)
  const velocity = useRef({ vx: 0, vy: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const hasInitPos = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animateCube);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  function animateCube() {
    setRotateX((prev) => prev + velocity.current.vy);
    setRotateY((prev) => prev + velocity.current.vx);
    velocity.current.vx *= 0.97;
    velocity.current.vy *= 0.97;
    rafId.current = requestAnimationFrame(animateCube);
  }

  function handleMouseEnter() {
    hasInitPos.current = false;
  }

  function handleMouseMove(e) {
    if (!hasInitPos.current) {
      lastPos.current = { x: e.clientX, y: e.clientY };
      hasInitPos.current = true;
      return;
    }
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    velocity.current.vx = dx * 0.3;
    velocity.current.vy = -dy * 0.3;
    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.subheading} />
      </Head>

      <main className={styles.mainContainer}>
        <h1 className={styles.heading}>{t.heading}</h1>
        <p className={styles.subheading}>{t.subheading}</p>

        {/* Bloc Navigation discret en haut */}
        <div className={styles.navBlock}>
          <h2 className={styles.navTitle}>{t.navTitle}</h2>
          <div className={styles.navLinks}>
            <Link href="/presentation" className={styles.navButton}>
              {t.presentations}
            </Link>
            <Link href="/competences" className={styles.navButton}>
              {t.competences}
            </Link>
            <Link href="/coordonnees" className={styles.navButton}>
              {t.coordonnees}
            </Link>
            <Link href="/experiences" className={styles.navButton}>
              {t.experiences}
            </Link>
            <Link href="/formations" className={styles.navButton}>
              {t.formations}
            </Link>
            <Link href="/interets" className={styles.navButton}>
              {t.interets}
            </Link>
          </div>
        </div>

        {/* Zone dédiée du Cube */}
        <div
          className={styles.scene}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
        >
          <div
            className={styles.cube}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
          >
            <div className={`${styles.face} ${styles.front}`}>
              <Link href="/presentation">
                <video
                  src="/videos/presentation.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoFace}
                />
              </Link>
            </div>
            <div className={`${styles.face} ${styles.back}`}>
              <Link href="/competences">
                <video
                  src="/videos/competences.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoFace}
                />
              </Link>
            </div>
            <div className={`${styles.face} ${styles.right}`}>
              <Link href="/coordonnees">
                <video
                  src="/videos/coordonnees.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoFace}
                />
              </Link>
            </div>
            <div className={`${styles.face} ${styles.left}`}>
              <Link href="/experiences">
                <video
                  src="/videos/experiences.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoFace}
                />
              </Link>
            </div>
            <div className={`${styles.face} ${styles.top}`}>
              <Link href="/formations">
                <video
                  src="/videos/formations.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoFace}
                />
              </Link>
            </div>
            <div className={`${styles.face} ${styles.bottom}`}>
              <Link href="/interets">
                <video
                  src="/videos/interets.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoFace}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bloc Téléchargement – 3 boutons en bas */}
        <div className={styles.downloadBlock}>
          <h2 className={styles.navTitle}>{t.downloadTitle}</h2>
          <div className={styles.navLinks}>
            <a
              href="/CVfr_Nicolas_Tardy.pdf"
              download
              className={styles.navButton}
            >
              {t.downloadClassic}
            </a>
            <a
              href="/nicolas tardy resume comics.pdf"
              download
              className={styles.navButton}
            >
              {t.downloadFun}
            </a>
            <a
              href="/CVen_Nicolas_Tardy.pdf"
              download
              className={styles.navButton}
            >
              {t.downloadEnglish}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
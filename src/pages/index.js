import { useContext, useRef, useState, useEffect, useCallback } from "react";
import { LanguageContext } from "./_app";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/HomeCube.module.css";

export default function Home() {
  const { lang } = useContext(LanguageContext);

  // Définitions bilingues
  const texts = {
    fr: {
      pageTitle: "Mon CV - Nicolas Tardy",
      heading: "Bienvenue et merci de votre visite",
      subheading:
        "Déplacez la souris (ou glissez votre doigt sur mobile) dans la zone pastel pour donner de l'élan au cube. Plus vous bougez vite, plus il tourne rapidement !",
      presentations: "Présentation",
      competences: "Compétences",
      coordonnees: "Coordonnées",
      experiences: "Expériences",
      formations: "Formations",
      interets: "Centres d'Intérêt",
      downloadTitle: "Téléchargez mes CV",
      downloadClassic: "Classique (FR)",
      downloadFun: "Fun (Comics)",
      downloadEnglish: "Anglais"
    },
    en: {
      pageTitle: "My Resume - Nicolas Tardy",
      heading: "Welcome and thank you for your visit",
      subheading:
        "Simply move your mouse (or slide your finger on mobile) within the pastel area to spin the cube. The faster you move, the faster it rotates!",
      presentations: "Presentation",
      competences: "Technical Skills",
      coordonnees: "Contact",
      experiences: "Work Experience",
      formations: "Education",
      interets: "Interests",
      downloadTitle: "Download my resumes",
      downloadClassic: "Classic (FR)",
      downloadFun: "Fun (Comics)",
      downloadEnglish: "English"
    }
  };

  const t = lang === "fr" ? texts.fr : texts.en;

  // État pour la rotation du cube
  const [rotateX, setRotateX] = useState(-10);
  const [rotateY, setRotateY] = useState(20);

  const velocity = useRef({ vx: 0, vy: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const active = useRef(false);
  const frameId = useRef(null);

  // Fonction d’animation avec pointer events
  const animateCube = useCallback(() => {
    setRotateX((prev) => prev + velocity.current.vy);
    setRotateY((prev) => prev + velocity.current.vx);
    // Appliquer une friction
    velocity.current.vx *= 0.96;
    velocity.current.vy *= 0.96;
    frameId.current = requestAnimationFrame(animateCube);
  }, []);

  useEffect(() => {
    frameId.current = requestAnimationFrame(animateCube);
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [animateCube]);

  // Gestion unifiée via les pointer events
  const handlePointerDown = (e) => {
    // Empêche les comportements par défaut (ex: défilement)
    e.preventDefault();
    lastPos.current = { x: e.clientX, y: e.clientY };
    active.current = true;
  };

  const handlePointerMove = (e) => {
    if (!active.current) return;
    e.preventDefault();
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    velocity.current.vx = dx * 0.3;
    velocity.current.vy = -dy * 0.3;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    active.current = false;
  };

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.subheading} />
      </Head>
      
      <main className={styles.mainContainer}>
        {/* En-tête de la page */}
        <header className={styles.heroHeader}>
          <h1 className={styles.heroTitle}>{t.heading}</h1>
          <p className={styles.heroSub}>{t.subheading}</p>
        </header>
        
        {/* Contenu principal : Navigation verticale à gauche + Cube au centre */}
        <div className={styles.contentWrapper}>
          {/* Navigation verticale sur le côté gauche */}
          <nav className={styles.sideNav}>
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
          </nav>
          
          {/* Zone du cube */}
          <div 
            className={styles.scene}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              className={styles.cube}
              style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
            >
              <div className={`${styles.face} ${styles.front}`}>
                <Link href="/presentation">
                  <video
                    src="/videos/presentation.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
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
                    playsInline
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
                    playsInline
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
                    playsInline
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
                    playsInline
                    className={styles.videoFace}
                  />
                </Link>
              </div>
              <div className={`${styles.face} ${styles.bottom}`}>
                <Link href="/interet">
                  <video
                    src="/videos/interets.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoFace}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer de téléchargement au centre */}
        <footer className={styles.downloadFooter}>
          <h2 className={styles.downloadTitle}>{t.downloadTitle}</h2>
          <div className={styles.downloadLinks}>
            <a href="/CVfr_Nicolas_Tardy.pdf" download className={styles.downloadBtn}>
              {t.downloadClassic}
            </a>
            <a href="/nicolas tardy resume comics.pdf" download className={styles.downloadBtn}>
              {t.downloadFun}
            </a>
            <a href="/Nicolas Tardy english resume.pdf" download className={styles.downloadBtn}>
              {t.downloadEnglish}
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
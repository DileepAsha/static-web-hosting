import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            Hey <strong>Konaseema</strong>
          </Link>
          <p className={styles.tagline}>
            {lang === 'en'
              ? 'Celebrating the temples, places & Festivals of the Godavari Delta.'
              : 'గోదావరి డెల్టా యొక్క దేవాలయాలు, స్థలాలు & పండగలు జరుపుకోవడం.'}
          </p>
          <div className={styles.om}>ॐ</div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>{lang === 'en' ? 'Explore' : 'అన్వేషించండి'}</h4>
            <Link to="/temples">{lang === 'en' ? 'Temples' : 'దేవాలయాలు'}</Link>
            <Link to="/places">{lang === 'en' ? 'Places' : 'స్థలాలు'}</Link>
            <Link to="/blogs">{lang === 'en' ? 'Blogs' : 'బ్లాగులు'}</Link>
          </div>
          <div className={styles.col}>
            <h4>{lang === 'en' ? 'Info' : 'సమాచారం'}</h4>
            <Link to="/about">{lang === 'en' ? 'About' : 'గురించి'}</Link>
            <a href="#">{lang === 'en' ? 'Contribute' : 'సహకరించండి'}</a>
            <a href="#">{lang === 'en' ? 'Contact' : 'సంప్రదించండి'}</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2025 Hey Konaseema · {lang === 'en' ? 'Made with love for the Godavari Delta By Bobby Nandha' : 'గోదావరి డెల్టా పై ప్రేమతో తయారు చేయబడింది'}</span>
      </div>
    </footer>
  )
}

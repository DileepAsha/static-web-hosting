import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { to: '/',        label: { en: 'Home',    te: 'హోం' } },
    { to: '/temples', label: { en: 'Temples', te: 'దేవాలయాలు' } },
    { to: '/places',  label: { en: 'Places',  te: 'స్థలాలు' } },
    { to: '/blogs',   label: { en: 'Blogs',   te: 'బ్లాగులు' } },
    { to: '/about',   label: { en: 'About',   te: 'గురించి' } },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/images/heyKonaseemaLogo.png" alt="Hey Konaseema"className={styles.logoIcon}/>
          <span className={styles.logoText}>
            Hey <strong>Konaseema</strong>
          </span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`${styles.link} ${location.pathname === l.to ? styles.active : ''}`}
              >
                {l.label[lang]}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <div className={styles.langToggle}>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
            <button
              className={`${styles.langBtn} ${lang === 'te' ? styles.langActive : ''}`}
              onClick={() => setLang('te')}
            >తె</button>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={menuOpen ? styles.barX1 : styles.bar} />
            <span className={menuOpen ? styles.barHide : styles.bar} />
            <span className={menuOpen ? styles.barX2 : styles.bar} />
          </button>
        </div>
      </div>
    </nav>
  )
}

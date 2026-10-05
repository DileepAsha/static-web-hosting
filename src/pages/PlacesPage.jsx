import { Link } from 'react-router-dom'
import { useLang, t } from '../context/LangContext'
import { places } from '../data/places'
import styles from './PlacesPage.module.css'

export default function PlacesPage() {
  const { lang } = useLang()

  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>🌿 {lang === 'en' ? 'Discover Konaseema' : 'కోనసీమ కనుగొనండి'}</span>
          <h1 className={styles.heroTitle}>
            {lang === 'en' ? <>Places to <em>Explore</em></> : <>అన్వేషించాల్సిన <em>స్థలాలు</em></>}
          </h1>
          <p className={styles.heroDesc}>
            {lang === 'en'
              ? 'From emerald backwaters and mangrove sanctuaries to cultural towns and pristine beaches — Konaseema has it all.'
              : 'పచ్చటి నీటి పొలాల నుండి మడ అడవులు, సాంస్కృతిక పట్టణాలు మరియు పరిశుభ్రమైన బీచ్‌ల వరకు.'}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {places.map(place => (
              <Link key={place.id} to={`/places/${place.id}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.emoji}>{place.icon}</div>
                  <span className={styles.category}>{t(place.category, lang)}</span>
                </div>
                <h3 className={styles.name}>{t(place.name, lang)}</h3>
                <p className={styles.location}>📍 {t(place.location, lang)}</p>
                <p className={styles.desc}>{t(place.desc, lang)}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {place.tags.slice(0, 2).map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.bestTime}>
                    🗓 {t(place.bestTime, lang)}
                  </div>
                </div>
                <div className={styles.arrow}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

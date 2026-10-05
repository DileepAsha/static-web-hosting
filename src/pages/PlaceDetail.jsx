import { useParams, Link } from 'react-router-dom'
import { useLang, t } from '../context/LangContext'
import { places } from '../data/places'
import styles from './PlaceDetail.module.css'

export default function PlaceDetail() {
  const { id } = useParams()
  const { lang } = useLang()
  const place = places.find(p => p.id === id)

  if (!place) return (
    <div style={{textAlign:'center',padding:'120px 24px'}}>
      <h2>Place not found</h2>
      <Link to="/places">← Back to Places</Link>
    </div>
  )

  const related = places.filter(p => p.id !== place.id).slice(0, 3)

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <Link to="/places" className={styles.back}>← {lang === 'en' ? 'All Places' : 'అన్ని స్థలాలు'}</Link>
          <div className={styles.heroEmoji}>{place.icon}</div>
          <div className={styles.heroCategory}>{t(place.category, lang)}</div>
          <h1 className={styles.heroTitle}>{t(place.name, lang)}</h1>
          <div className={styles.heroLocation}>📍 {t(place.location, lang)}</div>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.layout}>
            <div>
              <p className={styles.desc}>{t(place.desc, lang)}</p>
              <div className={styles.tags}>
                {place.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.infoBox}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🗓 {lang === 'en' ? 'Best Time' : 'ఉత్తమ సమయం'}</span>
                  <span>{t(place.bestTime, lang)}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>📍 {lang === 'en' ? 'Location' : 'స్థానం'}</span>
                  <span>{t(place.location, lang)}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🏷 {lang === 'en' ? 'Category' : 'వర్గం'}</span>
                  <span>{t(place.category, lang)}</span>
                </div>
              </div>

              <div className={styles.relatedBox}>
                <h3 className={styles.relatedTitle}>{lang === 'en' ? 'Also Explore' : 'కూడా చూడండి'}</h3>
                {related.map(p => (
                  <Link key={p.id} to={`/places/${p.id}`} className={styles.relatedCard}>
                    <span>{p.icon}</span>
                    <div>
                      <div className={styles.relatedName}>{t(p.name, lang)}</div>
                      <div className={styles.relatedCat}>{t(p.category, lang)}</div>
                    </div>
                    <span className={styles.relatedArrow}>→</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

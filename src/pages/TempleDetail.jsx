import { useParams, Link } from 'react-router-dom'
import { useLang, t } from '../context/LangContext'
import { temples } from '../data/temples'
import styles from './TempleDetail.module.css'

export default function TempleDetail() {
  const { id } = useParams()
  const { lang } = useLang()
  const temple = temples.find(t => t.id === id)

  if (!temple) return (
    <div className={styles.notFound}>
      <h2>Temple not found</h2>
      <Link to="/temples">← Back to Temples</Link>
    </div>
  )

  const related = temples.filter(t2 => t2.id !== temple.id && t2.type === temple.type).slice(0, 2)

  return (
    <div className={styles.page}>
      {/* HERO */}
      <div className={styles.hero} style={{ '--accent': temple.color }}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <Link to="/temples" className={styles.back}>← {lang === 'en' ? 'All Temples' : 'అన్ని దేవాలయాలు'}</Link>
          <div className={styles.heroIcon}>{temple.icon}</div>
          <div className={styles.heroType} style={{ color: temple.color }}>
            {temple.type.toUpperCase()} · {temple.era}
          </div>
          <h1 className={styles.heroTitle}>{t(temple.name, lang)}</h1>
          <div className={styles.heroLocation}>📍 {t(temple.location, lang)}</div>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className="container">
          <div className={styles.layout}>
            {/* MAIN */}
            <div className={styles.main}>
              <h2 className={styles.subhead}>{lang === 'en' ? 'About this Temple' : 'ఈ దేవాలయం గురించి'}</h2>
              <p className={styles.desc}>{t(temple.desc, lang)}</p>

              <div className={styles.tags}>
                {temple.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className={styles.sidebar}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>{lang === 'en' ? 'Visitor Info' : 'సందర్శక సమాచారం'}</h3>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🙏 {lang === 'en' ? 'Deity' : 'దేవత'}</span>
                  <span>{t(temple.deity, lang)}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🕐 {lang === 'en' ? 'Timings' : 'సమయాలు'}</span>
                  <span>{temple.timings}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>📍 {lang === 'en' ? 'Location' : 'స్థానం'}</span>
                  <span>{t(temple.location, lang)}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🚗 {lang === 'en' ? 'Nearest City' : 'సమీప నగరం'}</span>
                  <span>{t(temple.nearestCity, lang)}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🗺 {lang === 'en' ? 'Coordinates' : 'అక్షాంశాలు'}</span>
                  <span>{temple.coords}</span>
                </div>
              </div>

              {related.length > 0 && (
                <div className={styles.related}>
                  <h3 className={styles.relatedTitle}>{lang === 'en' ? 'Related Temples' : 'సంబంధిత దేవాలయాలు'}</h3>
                  {related.map(r => (
                    <Link key={r.id} to={`/temples/${r.id}`} className={styles.relatedCard}>
                      <span className={styles.relatedIcon}>{r.icon}</span>
                      <div>
                        <div className={styles.relatedName}>{t(r.name, lang)}</div>
                        <div className={styles.relatedLoc}>{t(r.location, lang)}</div>
                      </div>
                      <span className={styles.relatedArrow}>→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

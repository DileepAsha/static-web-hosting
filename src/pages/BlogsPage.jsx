import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang, t } from '../context/LangContext'
import { blogs } from '../data/blogs'
import styles from './BlogsPage.module.css'

const CATEGORIES = [
  { key: 'all', label: { en: 'All', te: 'అన్నీ' } },
  { key: 'Pilgrimage', label: { en: 'Pilgrimage', te: 'తీర్థయాత్ర' } },
  { key: 'Culture', label: { en: 'Culture', te: 'సంస్కృతి' } },
  { key: 'Nature', label: { en: 'Nature', te: 'ప్రకృతి' } },
  { key: 'Travel', label: { en: 'Travel', te: 'ప్రయాణం' } },
  { key: 'Food', label: { en: 'Food', te: 'ఆహారం' } },
  { key: 'Heritage', label: { en: 'Heritage', te: 'వారసత్వం' } },
]

export default function BlogsPage() {
  const { lang } = useLang()
  const [cat, setCat] = useState('all')

  const filtered = cat === 'all' ? blogs : blogs.filter(b => b.category.en === cat)
  const [featured, ...rest] = filtered

  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>✍️ {lang === 'en' ? 'Stories & Guides' : 'కథలు & మార్గదర్శకాలు'}</span>
          <h1 className={styles.heroTitle}>
            {lang === 'en' ? <>The Konaseema <em>Blog</em></> : <>కోనసీమ <em>బ్లాగ్</em></>}
          </h1>
          <p className={styles.heroDesc}>
            {lang === 'en'
              ? 'Travel guides, cultural stories, heritage deep-dives and personal journeys through the Godavari Delta.'
              : 'ప్రయాణ మార్గదర్శకాలు, సాంస్కృతిక కథలు, వారసత్వ అన్వేషణలు మరియు గోదావరి డెల్టా గుండా వ్యక్తిగత ప్రయాణాలు.'}
          </p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`${styles.filterBtn} ${cat === c.key ? styles.filterActive : ''}`}
                onClick={() => setCat(c.key)}
              >
                {t(c.label, lang)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          {/* FEATURED */}
          {featured && (
            <Link to={`/blogs/${featured.id}`} className={styles.featuredCard}>
              <div className={styles.featuredLeft}>
                <div className={styles.featuredEmoji}>{featured.emoji}</div>
                <span className={styles.featuredLabel}>{lang === 'en' ? 'Featured' : 'ముఖ్యమైనది'}</span>
                <div className={styles.featuredMeta}>
                  <span>{t(featured.category, lang)}</span>
                  <span>·</span>
                  <span>{featured.readTime} read</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <h2 className={styles.featuredTitle}>{t(featured.title, lang)}</h2>
                <p className={styles.featuredExcerpt}>{t(featured.excerpt, lang)}</p>
                <div className={styles.readMore}>{lang === 'en' ? 'Read article →' : 'చదవండి →'}</div>
              </div>
              <div className={styles.featuredRight}>
                <div className={styles.featuredPattern} />
                <div className={styles.featuredBigEmoji}>{featured.emoji}</div>
              </div>
            </Link>
          )}

          {/* REST */}
          {rest.length > 0 && (
            <div className={styles.grid}>
              {rest.map(blog => (
                <Link key={blog.id} to={`/blogs/${blog.id}`} className={styles.card}>
                  <div className={styles.cardEmoji}>{blog.emoji}</div>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCat}>{t(blog.category, lang)}</span>
                    <span className={styles.cardRead}>{blog.readTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{t(blog.title, lang)}</h3>
                  <p className={styles.cardExcerpt}>{t(blog.excerpt, lang)}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardAuthor}>— {blog.author}</span>
                    <span className={styles.cardDate}>{blog.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

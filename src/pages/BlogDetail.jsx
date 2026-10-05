import { useParams, Link } from 'react-router-dom'
import { useLang, t } from '../context/LangContext'
import { blogs } from '../data/blogs'
import styles from './BlogDetail.module.css'

export default function BlogDetail() {
  const { id } = useParams()
  const { lang } = useLang()
  const blog = blogs.find(b => b.id === id)

  if (!blog) return (
    <div className={styles.notFound}>
      <h2>Post not found</h2>
      <Link to="/blogs">← Back to Blog</Link>
    </div>
  )

  const related = blogs.filter(b => b.id !== blog.id && b.category.en === blog.category.en).slice(0, 2)

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <Link to="/blogs" className={styles.back}>← {lang === 'en' ? 'All Posts' : 'అన్ని పోస్ట్‌లు'}</Link>
          <div className={styles.heroEmoji}>{blog.emoji}</div>
          <div className={styles.heroMeta}>
            <span className={styles.heroCat}>{t(blog.category, lang)}</span>
            <span>·</span>
            <span>{blog.readTime} read</span>
            <span>·</span>
            <span>{blog.date}</span>
          </div>
          <h1 className={styles.heroTitle}>{t(blog.title, lang)}</h1>
          <p className={styles.heroAuthor}>by {blog.author}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.article}>
              <p className={styles.excerpt}>{t(blog.excerpt, lang)}</p>
              <div className={styles.divider} />
              <div className={styles.body}>
                {t(blog.content, lang).split('\n\n').map((para, i) => {
                  if (para.startsWith('**')) {
                    const clean = para.replace(/\*\*/g, '')
                    return <h3 key={i} className={styles.bodyH3}>{clean}</h3>
                  }
                  return <p key={i} className={styles.bodyP}>{para}</p>
                })}
              </div>
              <div className={styles.tags}>
                {blog.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </article>

            <aside className={styles.aside}>
              {related.length > 0 && (
                <div className={styles.relatedBox}>
                  <h3 className={styles.relatedTitle}>{lang === 'en' ? 'Related Posts' : 'సంబంధిత పోస్ట్‌లు'}</h3>
                  {related.map(b => (
                    <Link key={b.id} to={`/blogs/${b.id}`} className={styles.relatedCard}>
                      <span className={styles.relatedEmoji}>{b.emoji}</span>
                      <div>
                        <div className={styles.relatedName}>{t(b.title, lang)}</div>
                        <div className={styles.relatedMeta}>{b.readTime} · {b.author}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <div className={styles.ctaBox}>
                <div className={styles.ctaOm}>🛕</div>
                <h3>{lang === 'en' ? 'Explore Temples' : 'దేవాలయాలు అన్వేషించండి'}</h3>
                <p>{lang === 'en' ? 'Visit the sacred shrines of Konaseema on your next trip.' : 'మీ తదుపరి ప్రయాణంలో కోనసీమ పవిత్ర క్షేత్రాలను సందర్శించండి.'}</p>
                <Link to="/temples" className={styles.ctaBtn}>
                  {lang === 'en' ? 'View Temples →' : 'దేవాలయాలు చూడండి →'}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from "react-router-dom";
import { useLang, t } from "../context/LangContext";
import { temples } from "../data/temples";
import { places } from "../data/places";
import { blogs } from "../data/blogs";
import styles from "./Home.module.css";

function StatCard({ num, label }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNum}>{num}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function TempleCard({ temple, lang }) {
  return (
    <Link to={`/temples/${temple.id}`} className={styles.templeCard}>
      {/* Full Image */}
      <div className={styles.templeImageWrapper}>
        <img
          src={temple.image}
          alt={t(temple.name, lang)}
          className={styles.templeImage}
        />
        <div className={styles.templeTypeBadge}>
          {temple.type.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className={styles.templeContent}>
        <h3 className={styles.templeName}>{t(temple.name, lang)}</h3>
        <p className={styles.templeLocation}>📍 {t(temple.location, lang)}</p>
        <p className={styles.templeDesc}>{t(temple.desc, lang)}</p>
        <div className={styles.templeTags}>
          {temple.tags.slice(0, 2).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* <div className={styles.cardArrow}>→</div> */}
    </Link>
  );
}

function PlaceCard({ place, lang }) {
  return (
    // <Link to={`/places/${place.id}`} className={styles.placeCard}>
    //   <div className={styles.placeEmoji}>{place.icon}</div>
    //   <div className={styles.placeCategory}>{t(place.category, lang)}</div>
    //   <h3 className={styles.placeName}>{t(place.name, lang)}</h3>
    //   <p className={styles.placeDesc}>{t(place.desc, lang)}</p>
    //   <div className={styles.bestTime}>
    //     🗓 {lang === "en" ? "Best time: " : "వెళ్ళడానికి: "}
    //     {t(place.bestTime, lang)}
    //   </div>
    // </Link>
    <Link to={`/places/${place.id}`} className={styles.templeCard}>
      {/* Full Image */}
      <div className={styles.templeImageWrapper}>
        <img
          src={place.image}
          alt={t(place.name, lang)}
          className={styles.templeImage}
        />
        <div className={styles.templeTypeBadge}>{t(place.category, lang)}</div>
      </div>

      {/* Content */}
      <div className={styles.templeContent}>
        <h3 className={styles.placeName}>{t(place.name, lang)}</h3>
        <p className={styles.placeDesc}>{t(place.desc, lang)}</p>{" "}
        <div className={styles.bestTime}>
          🗓 {lang === "en" ? "Best time: " : "వెళ్ళడానికి: "}
          {t(place.bestTime, lang)}{" "}
        </div>
      </div>

      {/* <div className={styles.cardArrow}>→</div> */}
    </Link>
  );
}

function BlogCard({ blog, lang, featured = false }) {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className={`${styles.blogCard} ${featured ? styles.blogFeatured : ""}`}
    >
      <div className={styles.blogEmoji}>{blog.emoji}</div>
      <div className={styles.blogMeta}>
        <span className={styles.blogCat}>{t(blog.category, lang)}</span>
        <span className={styles.blogRead}>{blog.readTime} read</span>
      </div>
      <h3 className={styles.blogTitle}>{t(blog.title, lang)}</h3>
      <p className={styles.blogExcerpt}>{t(blog.excerpt, lang)}</p>
      <div className={styles.blogAuthor}>— {blog.author}</div>
    </Link>
  );
}

export default function Home() {
  const { lang } = useLang();

  const stats = [
    {
      num: "200+",
      label: lang === "en" ? "Ancient Temples" : "పురాతన దేవాలయాలు",
    },
    {
      num: "3",
      label: lang === "en" ? "Pancharama Sites" : "పంచారామ క్షేత్రాలు",
    },
    { num: "12", label: lang === "en" ? "Mandals" : "మండలాలు" },
    {
      num: "2000+",
      label: lang === "en" ? "Years of History" : "చరిత్ర సంవత్సరాలు",
    },
  ];

  const featuredTemples = temples.slice(0, 3);
  const featuredPlaces = places.slice(0, 3);
  const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3);

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgCircle1} />
          <div className={styles.heroBgCircle2} />
          <div className={styles.heroBgDots} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroOm}>ॐ</div>
          <h1 className={styles.heroTitle}>
            {lang === "en" ? (
              <>
                Hey <em>Konaseema</em>
              </>
            ) : (
              <>
                హే <em>కోనసీమ</em>
              </>
            )}
          </h1>
          <p className={styles.heroSub}>
            {lang === "en"
              ? "Temples · Places · Festivals · Stories of the Godavari Delta"
              : "గోదావరి డెల్టా యొక్క దేవాలయాలు · స్థలాలు · పండుగలు · కథలు"}
          </p>
          <p className={styles.heroDesc}>
            {lang === "en"
              ? "Discover the sacred temples, lush backwaters, ancient heritage and living culture of Konaseema — the emerald crown of Andhra Pradesh."
              : "కోనసీమ యొక్క పవిత్ర దేవాలయాలు, పచ్చటి నీటి పొలాలు, పురాతన వారసత్వం మరియు జీవన సంస్కృతిని కనుగొనండి."}
          </p>
          <div className={styles.heroCta}>
            <Link to="/temples" className={styles.btnPrimary}>
              {lang === "en" ? "Explore Temples" : "దేవాలయాలు చూడండి"}
            </Link>
            <Link to="/places" className={styles.btnPrimary}>
              {lang === "en" ? "Discover Places" : "స్థలాలు కనుగొనండి"}
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollLine} />
          <span>{lang === "en" ? "Scroll" : "క్రిందకు"}</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* ── FEATURED TEMPLES ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="section-label">
                {lang === "en" ? "Sacred Shrines" : "పవిత్ర క్షేత్రాలు"}
              </p>
              <h2 className="section-title">
                {lang === "en" ? (
                  <>
                    Featured <em>Temples</em>
                  </>
                ) : (
                  <>
                    ముఖ్యమైన <em>దేవాలయాలు</em>
                  </>
                )}
              </h2>
              <div className="divider" />
            </div>
            <Link to="/temples" className={styles.viewAll}>
              {lang === "en" ? "View all temples →" : "అన్నీ చూడండి →"}
            </Link>
          </div>
          <div className={styles.templesGrid}>
            {featuredTemples.map((temple) => (
              <TempleCard key={temple.id} temple={temple} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACES ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="section-label">
                {lang === "en" ? "Explore Konaseema" : "కోనసీమ అన్వేషించండి"}
              </p>
              <h2 className="section-title">
                {lang === "en" ? (
                  <>
                    Top <em>Places</em> to Visit
                  </>
                ) : (
                  <>
                    సందర్శించాల్సిన <em>స్థలాలు</em>
                  </>
                )}
              </h2>
              <div className="divider" />
            </div>
            <Link to="/places" className={styles.viewAll}>
              {lang === "en" ? "View all places →" : "అన్నీ చూడండి →"}
            </Link>
          </div>
          <div className={styles.placesGrid}>
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="section-label">
                {lang === "en" ? "Stories & Guides" : "కథలు & మార్గదర్శకాలు"}
              </p>
              <h2 className="section-title">
                {lang === "en" ? (
                  <>
                    From the <em>Blog</em>
                  </>
                ) : (
                  <>
                    <em>బ్లాగ్</em> నుండి
                  </>
                )}
              </h2>
              <div className="divider" />
            </div>
            <Link to="/blogs" className={styles.viewAll}>
              {lang === "en" ? "Read all posts →" : "అన్నీ చదవండి →"}
            </Link>
          </div>
          <div className={styles.blogsGrid}>
            {featuredBlogs.map((blog, i) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                lang={lang}
                featured={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER ── */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerOm}>ॐ</div>
          <h2 className={styles.bannerTitle}>
            {lang === "en"
              ? "Plan Your Sacred Journey"
              : "మీ పవిత్ర యాత్రను ప్రణాళిక చేయండి"}
          </h2>
          <p className={styles.bannerDesc}>
            {lang === "en"
              ? "Explore the Pancharama circuit, backwater boat rides, wildlife sanctuaries, and the finest regional cuisine."
              : "పంచారామ సర్కిట్, బ్యాక్‌వాటర్ పడవ విహారాలు, వన్యప్రాణి అభయారణ్యాలు మరియు ఉత్తమ ప్రాంతీయ వంటకాలను అన్వేషించండి."}
          </p>
          <div className={styles.bannerCta}>
            <Link to="/temples" className={styles.btnWhite}>
              {lang === "en" ? "Start Exploring" : "అన్వేషణ ప్రారంభించండి"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLang, t } from "../context/LangContext";
import { temples } from "../data/temples";
import styles from "./TemplesPage.module.css";

const FILTERS = [
  { key: "all", label: { en: "All", te: "అన్నీ" } },
  { key: "pancharama", label: { en: "Pancharama", te: "పంచారామ" } },
  { key: "vishnu", label: { en: "Vishnu", te: "విష్ణు" } },
  { key: "ekadasa-rudra", label: { en: "Ekadasa Rudra", te: "ఏకాదశరుద్రులు" } },
];

export default function TemplesPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list =
      filter === "all" ? temples : temples.filter((tm) => tm.type === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (tm) =>
          tm.name.en.toLowerCase().includes(q) ||
          tm.name.te.includes(q) ||
          tm.location.en.toLowerCase().includes(q) ||
          tm.location.te.includes(q) ||
          tm.deity.en.toLowerCase().includes(q) ||
          tm.tags.some((tag) => tag.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [filter, query]);

  const placeholder =
    lang === "en"
      ? "Search temples, deities, locations…"
      : "దేవాలయాలు, దేవతలు, స్థలాలు వెతకండి…";

  const scrollToGrid = () => {
    document
      .getElementById("temples-grid-top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFilterChange = (key) => {
    setFilter(key);
    scrollToGrid();
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    scrollToGrid();
  };

  return (
    <div className={styles.page}>
      {/* PAGE HERO */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className={styles.pageHeroContent}>
          <span className={styles.heroLabel}>
            🛕 {lang === "en" ? "Sacred Shrines" : "పవిత్ర క్షేత్రాలు"}
          </span>
          <h1 className={styles.heroTitle}>
            {lang === "en" ? (
              <>
                Temples of <em>Konaseema</em>
              </>
            ) : (
              <>
                కోనసీమ <em>దేవాలయాలు</em>
              </>
            )}
          </h1>
          <p className={styles.heroDesc}>
            {lang === "en"
              ? "From ancient Pancharamas to Ekadasa Rudra kshetras — explore the divine heritage of the Godavari Delta."
              : "పురాతన పంచారామాల నుండి ఏకాదశ రుద్ర క్షేత్రాల వరకు — గోదావరి డెల్టా యొక్క దివ్య వారసత్వాన్ని అన్వేషించండి."}
          </p>
        </div>
      </div>

      {/* FILTER + SEARCH BAR */}
      <div className={styles.filterBar} id="temples-grid-filterBar">
        <div className="container">
          <div className={styles.filterRow}>
            {/* SEARCH INPUT */}
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}>🔍︎</span>
              <input
                className={styles.searchInput}
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder={placeholder}
                aria-label="Search temples"
              />
              {query && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* TYPE FILTERS */}
            <div className={styles.filters}>
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`${styles.filterBtn} ${filter === f.key ? styles.filterActive : ""}`}
                  onClick={() => handleFilterChange(f.key)}
                >
                  {t(f.label, lang)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TEMPLES GRID */}
      <div className={styles.content} id="temples-grid-top">
        <div className="container">
          {/* RESULTS COUNT */}
          {(query || filter !== "all") && (
            <p className={styles.resultsCount}>
              {filtered.length === 0
                ? lang === "en"
                  ? "No temples found"
                  : "దేవాలయాలు కనుగొనబడలేదు"
                : lang === "en"
                  ? `${filtered.length} temple${filtered.length !== 1 ? "s" : ""} found`
                  : `${filtered.length} దేవాలయాలు కనుగొనబడ్డాయి`}
            </p>
          )}

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((temple) => (
                <Link
                  key={temple.id}
                  to={`/temples/${temple.id}`}
                  className={styles.card}
                >
                  <div
                    className={styles.cardHeader}
                    style={{ borderColor: temple.color + "60" }}
                  >
                    <div
                      className={styles.icon}
                      style={{ background: temple.color + "18" }}
                    >
                      {temple.icon}
                    </div>
                    <div>
                      <div className={styles.typeLabel}>{temple.era}</div>
                      <div
                        className={styles.typeBadge}
                        style={{ color: temple.color }}
                      >
                        {temple.type.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <h3 className={styles.name}>{t(temple.name, lang)}</h3>
                  <div className={styles.deity}>
                    {lang === "en" ? "Deity: " : "దేవత: "}
                    {t(temple.deity, lang)}
                  </div>
                  <div className={styles.location}>
                    📍 {t(temple.location, lang)}
                  </div>
                  <p className={styles.desc}>{t(temple.desc, lang)}</p>
                  <div className={styles.footer}>
                    <div className={styles.tags}>
                      {temple.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.arrow}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3>
                {lang === "en" ? "No temples found" : "దేవాలయాలు కనుగొనబడలేదు"}
              </h3>
              <p>
                {lang === "en"
                  ? `No results for "${query}". Try a deity name, location, or tag.`
                  : `"${query}" కోసం ఫలితాలు లేవు. వేరే దేవత, స్థలం లేదా ట్యాగ్ ప్రయత్నించండి.`}
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
              >
                {lang === "en" ? "Clear filters" : "ఫిల్టర్‌లు తొలగించండి"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* INFO BANNER */}
      <div className={styles.infoBanner}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🕐</span>
              <h4>{lang === "en" ? "Visiting Hours" : "సందర్శన సమయాలు"}</h4>
              <p>
                {lang === "en"
                  ? "Most temples open 5:30–8:30 AM and 4–8 PM. Major festivals attract large crowds."
                  : "చాలా దేవాలయాలు 5:30–8:30 AM మరియు 4–8 PM తెరుచుకుంటాయి."}
              </p>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>👔</span>
              <h4>{lang === "en" ? "Dress Code" : "దుస్తుల నియమాలు"}</h4>
              <p>
                {lang === "en"
                  ? "Traditional attire is preferred. Dress modestly — cover shoulders and knees. Remove footwear at the entrance."
                  : "సాంప్రదాయ దుస్తులు మేలు. భుజాలు మరియు మోకాళ్ళు కప్పుకోండి."}
              </p>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🚗</span>
              <h4>{lang === "en" ? "Getting There" : "చేరుకోవడం"}</h4>
              <p>
                {lang === "en"
                  ? "Rajahmundry and Kakinada are the main hubs. Auto-rickshaws and local buses connect most temples."
                  : "రాజమహేంద్రవరం మరియు కాకినాడ ప్రధాన కేంద్రాలు."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

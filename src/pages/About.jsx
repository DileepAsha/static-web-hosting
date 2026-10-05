import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './About.module.css'

export default function About() {
  const { lang } = useLang()
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroOm}>ॐ</span>
          <h1 className={styles.heroTitle}>
            {lang === 'en' ? <>About <em>Hey Konaseema</em></> : <><em>హే కోనసీమ</em> గురించి</>}
          </h1>
          <p className={styles.heroDesc}>
            {lang === 'en'
              ? 'A community-driven digital guide to the temples, places and culture of the Godavari Delta.'
              : 'గోదావరి డెల్టా యొక్క దేవాలయాలు, స్థలాలు మరియు సంస్కృతికి కమ్యూనిటీ-ఆధారిత డిజిటల్ మార్గదర్శి.'}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.layout}>
            <div>
              <h2 className={styles.subTitle}>{lang === 'en' ? 'Our Mission' : 'మా లక్ష్యం'}</h2>
              <p className={styles.text}>
                {lang === 'en'
                  ? 'Hey Konaseema is a passion project built to document, celebrate and share the extraordinary cultural and spiritual wealth of the Konaseema region of Andhra Pradesh. The Godavari delta is home to some of India\'s most ancient temples, richest biodiversity, and most vibrant traditions — yet it remains underrepresented in mainstream travel and heritage platforms.'
                  : 'హే కోనసీమ అనేది ఆంధ్రప్రదేశ్‌లోని కోనసీమ ప్రాంతం యొక్క అసాధారణ సాంస్కృతిక మరియు ఆధ్యాత్మిక సంపదను నమోదు చేయడానికి, జరుపుకోవడానికి మరియు పంచుకోవడానికి నిర్మించిన ఒక వ్యక్తిగత ప్రాజెక్ట్.'}
              </p>
              <p className={styles.text}>
                {lang === 'en'
                  ? 'We believe every temple stone, every coconut tree, every backwater canal and every festival celebration in Konaseema has a story worth telling. This site is our attempt to tell those stories — in both English and Telugu — for the diaspora, the curious traveller, and the local community alike.'
                  : 'కోనసీమలోని ప్రతి దేవాలయ రాయి, ప్రతి కొబ్బరి చెట్టు, ప్రతి కాలువ మరియు ప్రతి పండుగకు చెప్పుకోవదగ్గ కథ ఉంది.'}
              </p>

              <h2 className={styles.subTitle} style={{marginTop: 40}}>
                {lang === 'en' ? 'About Konaseema' : 'కోనసీమ గురించి'}
              </h2>
              <p className={styles.text}>
                {lang === 'en'
                  ? 'Konaseema (also spelled Konasema) is the lush deltaic region formed by the fingers of the Godavari river as it meets the Bay of Bengal in East Godavari and West Godavari districts of Andhra Pradesh. The name is derived from "Kona" (corner/tip) and "Seema" (boundary) — a land at the corner of the sea.'
                  : 'కోనసీమ అనేది గోదావరి నది తూర్పు గోదావరి మరియు పశ్చిమ గోదావరి జిల్లాలలో బంగాళాఖాతాన్ని కలిసే చోట ఏర్పడిన సారవంతమైన డెల్టా ప్రాంతం.'}
              </p>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.quickFacts}>
                <h3>{lang === 'en' ? 'Quick Facts' : 'ముఖ్య వివరాలు'}</h3>
                {[
                  {l:{en:'Region',te:'ప్రాంతం'}, v:{en:'East & West Godavari, Andhra Pradesh',te:'తూర్పు & పశ్చిమ గోదావరి, ఆంధ్రప్రదేశ్'}},
                  {l:{en:'Language',te:'భాష'}, v:{en:'Telugu (primary)',te:'తెలుగు (ప్రాధమిక)'}},
                  {l:{en:'Famous For',te:'ప్రసిద్ధి'}, v:{en:'Pancharamas, Coconuts, Kuchipudi',te:'పంచారామాలు, కొబ్బరి, కుచిపూడి'}},
                  {l:{en:'Nearest Airport',te:'సమీప విమానాశ్రయం'}, v:{en:'Rajahmundry (RJA)',te:'రాజమహేంద్రవరం (RJA)'}},
                ].map((f, i) => (
                  <div key={i} className={styles.factRow}>
                    <span className={styles.factLabel}>{f.l[lang]}</span>
                    <span className={styles.factVal}>{f.v[lang]}</span>
                  </div>
                ))}
              </div>

              <div className={styles.contribute}>
                <span style={{fontSize:'2rem'}}>✍️</span>
                <h3>{lang === 'en' ? 'Contribute' : 'సహకరించండి'}</h3>
                <p>{lang === 'en' ? 'Know a temple or place we missed? Have a story to share? We\'d love to hear from you.' : 'మేము మిస్ చేసిన దేవాలయం లేదా స్థలం తెలుసా? మీకు పంచుకోవాల్సిన కథ ఉందా?'}</p>
                <a href="mailto:hello@heykonaseema.in" className={styles.contactBtn}>
                  {lang === 'en' ? 'Get in touch →' : 'సంప్రదించండి →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORE CTA */}
      <div className={styles.exploreCta}>
        <div className="container">
          <h3>{lang === 'en' ? 'Start Exploring' : 'అన్వేషణ ప్రారంభించండి'}</h3>
          <div className={styles.ctaBtns}>
            <Link to="/temples" className={styles.ctaBtn}>🛕 {lang === 'en' ? 'Temples' : 'దేవాలయాలు'}</Link>
            <Link to="/places" className={styles.ctaBtn}>🌿 {lang === 'en' ? 'Places' : 'స్థలాలు'}</Link>
            <Link to="/blogs" className={styles.ctaBtn}>✍️ {lang === 'en' ? 'Blog' : 'బ్లాగ్'}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

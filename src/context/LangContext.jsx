import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => l === 'en' ? 'te' : 'en')
  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

// Helper: pick string based on lang
export function t(obj, lang) {
  return obj[lang] ?? obj.en
}

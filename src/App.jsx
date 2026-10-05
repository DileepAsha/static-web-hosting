import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TemplesPage from './pages/TemplesPage'
import TempleDetail from './pages/TempleDetail'
import PlacesPage from './pages/PlacesPage'
import PlaceDetail from './pages/PlaceDetail'
import BlogsPage from './pages/BlogsPage'
import BlogDetail from './pages/BlogDetail'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
    <LangProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/temples"       element={<TemplesPage />} />
          <Route path="/temples/:id"   element={<TempleDetail />} />
          <Route path="/places"        element={<PlacesPage />} />
          <Route path="/places/:id"    element={<PlaceDetail />} />
          <Route path="/blogs"         element={<BlogsPage />} />
          <Route path="/blogs/:id"     element={<BlogDetail />} />
          <Route path="/about"         element={<About />} />
        </Routes>
      </main>
      <Footer />
    </LangProvider>
  )
}

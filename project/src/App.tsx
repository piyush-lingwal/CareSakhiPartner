import { useEffect, useRef, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PartnerGuide from './pages/PartnerGuide'
import Blog from './pages/Blog'
import HelpCenter from './pages/HelpCenter'
import APIDocs from './pages/APIDocs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const appRef = useRef<HTMLDivElement>(null)

  const setupObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const root = appRef.current
    if (!root) return () => { }

    const els = root.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setupObserver()
    }, 100)

    const failsafe = setTimeout(() => {
      const root = appRef.current
      if (root) {
        const hidden = root.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)')
        hidden.forEach((el) => el.classList.add('visible'))
      }
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(failsafe)
    }
  }, [setupObserver])

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div ref={appRef}>
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner-guide" element={<PartnerGuide />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/api-docs" element={<APIDocs />} />
      </Routes>
      {!isHomePage && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

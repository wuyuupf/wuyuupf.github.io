import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import About from './components/About'
import Publications from './components/Publications'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container">
        <About />
        <Publications />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App

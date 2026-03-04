import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      {/* Header */}
      <header>
        <Navbar></Navbar>
      </header>

      {/* Main */}
      <main>
        <Hero></Hero>
      </main>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App

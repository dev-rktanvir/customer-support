import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
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
      <main className='bg-amber-50'>
        <Hero></Hero>
        <div>
          <CustomerTickets></CustomerTickets>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App

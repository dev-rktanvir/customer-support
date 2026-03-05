import { useState } from 'react'
import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);
  const [alltask, setAllTask] = useState([]);

  return (
    <>
      {/* Header */}
      <header>
        <Navbar></Navbar>
      </header>

      {/* Main */}
      <main className='bg-amber-50'>
        <Hero progressCount={progressCount}></Hero>
        <div>
          <CustomerTickets
            alltask={alltask}
            setAllTask={setAllTask}
            progressCount={progressCount}
            setProgressCount={setProgressCount}
          ></CustomerTickets>
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

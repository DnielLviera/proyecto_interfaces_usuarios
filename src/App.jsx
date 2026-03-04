import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import CardContainers from './components/CardContainers'
import Footer from './components/Footer'

function App() {

  return (
    <main className='font-Rubik justify-center bg-bg-dark h-full w-full'>
      <section>
        <Navbar />
        {/* <Hero /> */}
        <CardContainers />
        <Footer />
      </section>
    </main>
  )
}

export default App

import './App.css'
import Hero from './components/Hero'
import CardContainers from './components/CardContainers'
import Footer from './components/Footer'

function App() {

  return (
    <main className='font-Rubik flex justify-center bg-bg-dark h-dvh'>
      <section className=' my-5 p-1'>
        <Hero />
        <CardContainers />
        <Footer />
      </section>
    </main>
  )
}

export default App

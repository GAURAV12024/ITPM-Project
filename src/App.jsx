
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Info from './Components/Info.jsx/Info'
import Navbar from './Components/Navbar/Navbar'
import Workshop from './Components/Workshops/Workshop'

function App() {
  

  return (
    <>
    
    <div className='w-full'>
      <div className=' fixed w-full top-0 left-0 z-50'>
      <Info/>
      <Navbar/>
      </div>
      <div className='mt-24 z-20'>
      <Header/>
      </div>
      <div>
     <Workshop/>
      </div>
      
      <div>
        <Footer/>
      </div>
    
    </div>
      
    </>
  )
}

export default App

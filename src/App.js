import {React, useState ,useEffect} from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ScaleLoader from 'react-spinners/ScaleLoader'

import Home from './Home'
import './Css/App.css'
import MainNavbar from './navbar'
import Footer from './Footer'


const App = () => {

  const [loading ,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)

    setTimeout(()=>{

      setLoading(false)

    },3000)
  },[])

  return (   
    <BrowserRouter>

      {loading ? 

        <div className='LoaderPage'>
          <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} radius={100} />
        </div>
        :
        <div className='website'>

        <MainNavbar/>                 
        <Routes>

          <Route path='/' element = { <Home/> } />

          
        </Routes>
        <footer>
       
          <Footer/>   
        </footer>

        </div>

        
      }

    </BrowserRouter>
  )
}

export default App
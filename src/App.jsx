import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Poster from './Pages/Poster/Poster'
import Register from './Pages/Register/Register'
import Events from './Pages/Events/Events'

function App() {

  return (
    <Router>
       <Navbar/>

       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/events' element={<Events/>}/>
          <Route exact path='/poster' element={<Poster/>}/>
          <Route exact path='/register' element={<Register/>}/>
          
       </Routes>
       <Contact/>
     </Router>
  )
}

export default App

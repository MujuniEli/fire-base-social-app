import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { Main } from './pages/Main'

function App() {
  

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </Router>
        
    </div>
  )
}

export default App

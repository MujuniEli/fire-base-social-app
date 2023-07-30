import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { Nav } from './components/Nav'
import { CreatePost } from './pages/createPost/CreatePost'

function App() {
  

  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/createpost' element={ <CreatePost /> } />
        </Routes>
      </Router>
        
    </div>
  )
}

export default App

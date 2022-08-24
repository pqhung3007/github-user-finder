import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </Router>
    )
}

export default App;

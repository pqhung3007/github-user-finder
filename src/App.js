import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import User from './pages/User';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
    return (
        <AlertProvider>
            <GithubProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={
                            <>
                                <Alert />
                                <Home />
                            </>
                        }
                        />
                        <Route path='/user' element={<User />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Router>
            </GithubProvider>
        </AlertProvider>
    )
}

export default App;

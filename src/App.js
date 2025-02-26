import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <main className='container content'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category/:name' element={<Category/>}/>
            </Routes>
          </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

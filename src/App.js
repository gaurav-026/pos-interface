import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Insights from './pages/Insights';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={'/'} element={<MainPage/>} />
      <Route path={'/cart'} element={<Cart/>} />
      <Route path={'/about'} element={<About/>} />
      <Route path={'/insights'} element={<Insights/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;

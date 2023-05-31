import spinny from './assets/Whatmean.png';
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/home'
import Other from './pages/other'
import Page from './pages/page'
import { Route, Routes } from 'react-router-dom'

function App() {
	

  return (
    <div className="App">
      
	  <Header />
	  <main className = 'main'>
		<Navbar />
		
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/other" element={<Other />} />
				<Route path="/page" element={<Page />} />
			</Routes>

		</div>
		
	  </main>
	  <Footer />
		
    </div>
  );
}

export default App;

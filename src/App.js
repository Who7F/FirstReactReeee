import spinny from './assets/Whatmean.png';
import './App.css';
import Banner from './components/banner'
import Weekdays from './components/weekdays'
import Thebutton from './components/button'
import Whatstate from './components/whatstate'
import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/home'
import Other from './pages/other'

function App() {
	
	
  let component
  switch(window.location.pathname){
	  case "/":
		component = <Home />
		break
	  case "/other":
		component = <Other />
		break
  }
  return (
    <div className="App">
      
	  <Header />
	  <main>
		<Navbar />
		<div>!</div>
		{component}
		<div>!</div>
		<div>
			<Banner value='Reeee React' stuff ='well well well' />
			<Weekdays />
			<Thebutton value='click me' />
			<Whatstate />
			
		</div>
	  </main>
	  <Footer />
		
    </div>
  );
}

export default App;

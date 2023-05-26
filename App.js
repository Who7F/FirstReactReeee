import logo from './Whatmean.png';
import './App.css';
import Banner from './components/banner'
import Weekdays from './components/weekdays'

function App() {
	
	
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
	  <main>
		<div>
			<Banner />
			<Weekdays />
		</div>
	  </main>
	  <footer>
		<a
          className="App-link"
          href="https://github.com/Who7F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github  
        </a>
	  </footer>
    </div>
  );
}

export default App;

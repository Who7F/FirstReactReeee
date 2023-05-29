import spinny from '../assets/Whatmean.png';

function Header(){
	return(
		
		<header className="App-header">
			<span>
				<h1>REEEE React</h1>
			</span>
			<span className="App-header-spinny">
			<span>
				Look a spinny
			</span>
			<span>
				<img src={spinny} className="App-spinny" alt="spinny" />
			</span>
			</span>
		</header>
		
	)
}

export default Header
import Weekdays from '../components/weekdays'
import Whatstate from '../components/whatstate'

function Page(){
	return(
		<div>
			<h3>Page</h3>
			<Weekdays weekend = '😴'/>
			<Whatstate />
		</div>
		
	)
}

export default Page
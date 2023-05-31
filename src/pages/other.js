import Thebutton from '../components/button'
import Weekdays from '../components/weekdays'

function Other(){
	return(
		<div>
			<h3>Other</h3>
			<Weekdays weekend = '🧟' />
			<Thebutton value='click me' />
		</div>
	)
}

export default Other
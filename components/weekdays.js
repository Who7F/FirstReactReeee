const dayList = ['Monday','Tuserday','Wednesday','Thursday','Firday','Saturday','Sunday']

function Weekdays(){
	return(

	<ul>
		{dayList.map((day) =>(
			<li key={day}>{day}</li>
		))}
	</ul>
)
}

export default Weekdays
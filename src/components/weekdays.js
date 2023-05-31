function Weekdays(props){
	const dayList = [{name: 'Monday', weekend: false},{name: 'Tuesday', weekend: false},{name: 'Wednesday', weekend: false},{name: 'Thursday', weekend: false},{name: 'Firday', weekend: false},{name: 'Saturday', weekend: true},{name: 'Sunday', weekend: true}]
	return(

		<ul>
			{dayList.map((day) =>(
				<li key={day.name}><span>{day.name}</span>{day.weekend ? <span>{props.weekend}</span> : <span>👨‍💻</span>}</li>
			))}
		</ul>
	)
}

export default Weekdays
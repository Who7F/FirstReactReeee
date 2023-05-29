function handleClickOld(){
	console.log('click')
}

function Thebutton(props){
	const handleClickNew = (e) =>{console.log(e)}
	return <div><button onClick = {() => handleClickNew('click')}>{props.value}</button></div>
}
export default Thebutton

import { useState } from 'react'

function Whatstate(){
	const myPrice = 8
	const [age, setAge] = useState(99)
	const [name, setName] = useState('bob')
	const [cart, dogshit] = useState(0)
	
	return(
		<div className ='ja-cart'>
			Price: {myPrice}£
			<button onClick ={() => dogshit(cart +1)}>
				dont ask {cart}
			</button>
		</div>
	)
}
export default Whatstate
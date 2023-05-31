import { Link, useMatch, useResolvedPath } from "react-router-dom"
function CustomLink({ to, child, ...props }){
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })
	const path = window.location.pathname
	return(
		<li className = {isActive ? "active" : ""}>
			<Link  to = {to} {...props}>{child}</Link >
		</li>
	)
}

function Navbar(){
	return(
		
		<nav className = "nav">
			<h3>Navbar</h3>
			<ul>
				<CustomLink to = "/" child = "Home" />
				<CustomLink to = "/page" child = "Page" />	
				<CustomLink to = "/other" child = "Other" />	
				
			</ul>
		</nav>
	)
}

export default Navbar
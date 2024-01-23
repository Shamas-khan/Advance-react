import { Link } from "react-router-dom"
import vite from "../assets/Images/vite.svg"

function Header() {
	return (
		<header className="flex justify-between  px-4 py-4 shadow-lg md:px-8 ">
			<Link to="/">
				<img src={vite} alt="" />
			</Link>
			<ul className="flex  gap-4">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header

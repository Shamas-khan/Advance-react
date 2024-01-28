import { NavLink } from "react-router-dom"
import vite from "../assets/Images/vite.svg"
import Model from "./Model"
import { useState } from "react"

function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className="mb-2 flex justify-between  px-4 py-4 shadow-lg md:px-8 ">
			<NavLink to="/">
				<img src={vite} alt="" />
			</NavLink>
			<ul className="flex  gap-4">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "text-blue-600 underline" : ""
						}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? "text-blue-600 underline" : ""
						}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive ? "text-blue-600 underline" : ""
						}>
						Contact
					</NavLink>
				</li>
				<li>
					<button onClick={() => setIsOpen(true)}>sign in</button>
					<Model isOpen={isOpen} setIsOpen={setIsOpen} />
				</li>
			</ul>
		</header>
	)
}

export default Header

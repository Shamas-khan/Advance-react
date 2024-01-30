import { lazy, useState } from "react"

function About() {
	const [todeslist, settodeslist] = useState([])

	const loadData = async () => {
		try {
			const module = await import("../Components/data")
			settodeslist(module.data || []) // Ensure that module.data is an array or provide a default empty array
		} catch (error) {
			console.error("Error loading data:", error)
		}
	}
	return (
		<>
			<h1>about</h1>
			<button onClick={loadData}>load data</button>
			<ul>
				{todeslist?.map((item, index) => {
					return <li key={index}>{item.title}</li>
				})}
			</ul>
		</>
	)
}

export default About

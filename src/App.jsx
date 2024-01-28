import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import { Suspense } from "react"
import Spinner from "./Components/Spinner"

function App() {
	return (
		<>
			<Header />
			<Suspense fallback={<Spinner />}>
				<Outlet />
			</Suspense>
		</>
	)
}

export default App

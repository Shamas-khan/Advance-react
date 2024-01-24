import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from "./pages/Contact.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			{
				path: "/",
				element: <Home />,
			},

			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />,
)

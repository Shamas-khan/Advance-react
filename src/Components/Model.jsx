import { createPortal } from "react-dom"

const Model = ({ isOpen, setIsOpen }) => {
	return createPortal(
		<div
			onClick={() => setIsOpen(!true)}
			className={`fixed  top-0 z-10 ${isOpen ? "block" : "hidden"} left-0 flex h-screen w-full items-center  justify-center overflow-y-auto`}
			id="modal">
			<div className="min-height-100vh flex items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-900 opacity-75" />
				</div>
				<span className="hidden sm:inline-block sm:h-screen sm:align-middle">
					&#8203;
				</span>
				<div
					onClick={(e) => e.stopPropagation()}
					className="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
					role="dialog"
					aria-modal="true"
					>
					<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<label className="font-medium text-gray-800">Name</label>
						<input
							type="text"
							className="mb-3 mt-2 w-full rounded bg-gray-100 p-2 outline-none"
						/>
						<label className="font-medium text-gray-800">Url</label>
						<input
							type="text"
							className="mb-3 mt-2 w-full rounded bg-gray-100 p-2 outline-none"
						/>
					</div>
					<div className="bg-gray-200 px-4 py-3 text-right">
						<button
							type="button"
							onClick={() => setIsOpen(!true)}
							className="mr-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">
							<i className="fas fa-times"></i> Cancel
						</button>
						<button
							type="button"
							onClick={() => setIsOpen(!true)}
							className="mr-2 rounded bg-blue-500 px-4 py-2 font-medium text-white transition duration-500 hover:bg-blue-700">
							<i className="fas fa-plus"></i> Create
						</button>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById("portal"),
	)
}

export default Model

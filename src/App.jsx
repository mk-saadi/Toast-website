import { useToast } from "react-toast-master";
import { Toaster } from "react-hot-toast";

function App() {
	const { toastMaster } = useToast();

	const handleToast = async () => {
		const confirm = await toastMaster({
			type: "confirm",
			message: "hello",
			bg: "dark",
			footer: (
				<p>
					If you don&apos;t intend to delete then you can{" "}
					<span
						className="text-[#2196f3] cursor-pointer underline"
						onClick={handleToast}
					>
						Suspend
					</span>{" "}
					the user.
				</p>
			),
			align: "left",
			position: "center",
		});

		if (confirm) {
			toastMaster({
				type: "loadingWhite",
				message: "Please wait!",
				cancelButton: true,
				bg: "dark",
			});

			setTimeout(() => {
				toastMaster({
					type: "successWhite",
					message: "hello",
					bg: "dark",
					radius: "full",
					cancelButton: true,
				});
			}, 4500);
		}
	};

	return (
		<>
			<div className="flex items-center justify-center min-h-screen gap-4">
				<Toaster />
				<button
					onClick={() =>
						toastMaster({
							type: "warningStay",
							message: "Oops!",
							footer: (
								<p>
									Something went wrong. Please try again. If that doesn&apos;t work try
									again again.
								</p>
							),
							align: "center",
							position: "bottomFull",
							bg: "dark",
							transition: "top",
							radius: "none",
							// shadow: "error",

							// cancelButton: true,
						})
					}
				>
					hello
				</button>
				<button
					onClick={() =>
						toastMaster({
							type: "infoStay",
							message: "Oops!",
							footer: (
								<p>
									Something went wrong. Please try again. If that doesn&apos;t work try
									again <span style={{ color: "#2196f3", cursor: "pointer" }}>again</span>.
								</p>
							),
							align: "left",
							position: "bottomLeft",
							bg: "glass",
							// skew: "right12",
							transition: "zoom",
							shadow: "none",
							cancelButton: true,
						})
					}
				>
					hello
				</button>

				<button
					onClick={() =>
						toastMaster({
							type: "errorWhite",
							message: "Uh oh! Something went wrong.",
							footer: (
								<div className="flex justify-between">
									<p>There was a problem with your request.</p>{" "}
									<span className="text-white px-2 whitespace-nowrap h-min duration-100 hover:text-[#dc2626] cursor-pointer border border-white rounded-sm hover:bg-white">
										Try again
									</span>
								</div>
							),
							align: "left",
							position: "bottomRight",
							bg: "error",
							transition: "top",
							shadow: "white",
							cancelButton: true,
						})
					}
				>
					hola
				</button>

				<button onClick={handleToast}>hello</button>
				<button>hello</button>
			</div>
		</>
	);
}

export default App;

import { useToast } from "react-toast-master";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import HideButton from "../hooks/HideButton";
import Button from "../hooks/Button";

const toastType = [
	{ type: "success", name: "success", message: "Code compiled successfully." },
	{ type: "error", name: "error", message: "Error at code 143." },
	{ type: "info", name: "info", message: "You have a dentist appointment tomorrow at 9:30 am." },
	{ type: "warning", name: "warning", message: "Couldn't compile code. See error" },
	{ type: "loadingDark", name: "loading", message: "Loading happiness." },
	{ type: "basicDark", name: "basic", message: "Just another Tuesday." },
	{
		type: "confirmDark",
		name: "confirm",
		message: "Are you sure you want to delete your enemies?",
		align: "left",
		innerFooter: <p>If you delete, it will be "THE END" for them.</p>,
	},
];

const TypeExample = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastType[0]);

	const types = selected.type;
	const message = selected.message;
	const align = selected.align;
	const footer = selected.innerFooter;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: types,
			message: message,
			transition: "down",
			align: align,
			footer: footer,
		});
	};

	// const foot = async () => {
	// 	const confirm = await toastMaster({
	// 		type: "confirm",
	// 		bg: "dark",
	// 		message: "Are you sure you want to delete your enemies?",
	// 		footer: <p>Once you delete them, it will be "THE END" for them.</p>,
	// 		align: "left",
	// 	});
	// };

	return (
		<>
			<form onSubmit={toastHandler}>
				<div className="overflow-hidden w-fit">
					<label
						className="block text-base font-semibold leading-6"
						style={{ color: "var(--text-color-dark-white)" }}
					>
						Select a toast Type.
					</label>
					<div className="w-full mx-auto mt-2">
						<RadioGroup
							value={selected}
							onChange={setSelected}
						>
							<RadioGroup.Label className="sr-only">toast type</RadioGroup.Label>
							<div className="flex flex-row flex-wrap w-full gap-2">
								{toastType.map((plan) => (
									<RadioGroup.Option
										key={plan.type}
										value={plan}
										className={({ checked }) =>
											`${checked ? "bg-accent" : " bg-slate-700/10"}
                                                relative flex cursor-pointer px-2 w-fit outline-none`
										}
										style={{
											borderRadius: "var(--borderRadius)",
											border: "1px solid var(--border-gray)",
										}}
									>
										{({ checked }) => (
											<>
												<div className="flex items-center justify-between w-full">
													<div className="flex items-center">
														<RadioGroup.Label
															as="p"
															className="font-medium"
															style={{
																color: checked
																	? "var(--text-color-dark-dark)"
																	: "var(--text-color-dark-white)",
															}}
														>
															{plan.name}
														</RadioGroup.Label>
													</div>
												</div>
											</>
										)}
									</RadioGroup.Option>
								))}
							</div>
						</RadioGroup>
					</div>
				</div>

				<Button
					classname={"w-full"}
					type={"submit"}
				>
					Pop
				</Button>
			</form>
			<HideButton
				classname={"w-full mt-2"}
				clickAction={hideToast}
			>
				Hide
			</HideButton>
		</>
	);
};

export default TypeExample;

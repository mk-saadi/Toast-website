import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import Button from "../hooks/Button";

const toastType = [
	{ type: "success", message: "Code compiled successfully." },
	{ type: "error", message: "Error at code 143." },
	{ type: "info", message: "You have a dentist appointment tomorrow at 9:30 am." },
	{ type: "warning", message: "Couldn't compile code. See error" },
	{ type: "loading", message: "Loading happiness." },
	{ type: "basic", message: "Just another Tuesday." },
	{
		type: "confirm",
		message: "Are you sure you want to delete your enemies?",
		align: "left",
	},
];

const toastColor = [
	{ color: "", name: "Default" },
	{ color: "White", name: "White" },
	{ color: "Dark", name: "Dark" },
];

const ToastColor = () => {
	const { toastMaster } = useToast();

	const [selected, setSelected] = useState(toastType[0]);
	const [selectedColor, setSelectedColor] = useState(toastColor[0]);

	const types = selected.type;
	const message = selected.message;
	const color = selectedColor.color;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: types + color,
			message: message,
			cancelButton: true,
			transition: "down",
			bg: "glass",
		});
	};

	return (
		<div
			id="toastColor"
			className="space-y-4"
		>
			<Hei2 classname={"mb-2"}># Toast Types/colors:</Hei2>
			<p>
				Every toast has <CustomSpan>three</CustomSpan>(some two) different colors eg. primary, a white
				and a dark version.
			</p>

			<ItalicText>Example below:</ItalicText>
			<form
				onSubmit={toastHandler}
				className="flex flex-col gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast default */}
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
								<div className="grid w-full grid-cols-2 grid-rows-4 gap-2">
									{toastType.map((plan) => (
										<RadioGroup.Option
											key={plan.type}
											value={plan}
											className={({ checked }) =>
												`${checked ? "bg-primary" : " bg-slate-700/10"}
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
																className={`font-medium  ${
																	checked ? "text-white" : "text-default"
																}`}
															>
																{plan.type}
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

					{/* toast color */}
					<div className="overflow-hidden w-fit">
						<label
							className="block text-base font-semibold leading-6"
							style={{ color: "var(--text-color-dark-white)" }}
						>
							Select a toast Color.
						</label>
						<div className="w-full mx-auto mt-2">
							<RadioGroup
								value={selectedColor}
								onChange={setSelectedColor}
							>
								<RadioGroup.Label className="sr-only">toast color</RadioGroup.Label>
								<div className="flex flex-col flex-wrap w-full gap-y-2">
									{toastColor.map((plan) => (
										<RadioGroup.Option
											key={plan.name}
											value={plan}
											className={({ checked }) =>
												`${checked ? "bg-primary" : " bg-slate-700/10"}
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
																className={`font-medium  ${
																	checked ? "text-white" : "text-default"
																}`}
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
				</div>

				<p className="max-w-prose">
					<small>
						* if the text is invisible try changing the text color. It may have become invisible
						due to the background color.
						<br />
						"basic" and "confirm" doesn't have "White" as toast color. So leave the color to
						"Default" or "Dark".
					</small>
				</p>

				<Button
					classname={"w-full"}
					type={"submit"}
				>
					Pop
				</Button>
			</form>

			<div>
				<p>
					Toast type "basic" and "confirm" by default have <CustomSpan>white</CustomSpan> color as
					their value since by default their text color is white. <br />
					So no need to put <CustomSpan>"basicWhite"</CustomSpan> or{" "}
					<CustomSpan>"confirmWhite"</CustomSpan> in the "type" key of toastMaster()
				</p>
			</div>
		</div>
	);
};

export default ToastColor;

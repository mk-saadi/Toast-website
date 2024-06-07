import { useState } from "react";
import ItalicText from "../hooks/ItalicText";
import { useToast } from "react-toast-master";
import Hei2 from "../hooks/Hei2";
import { RadioGroup } from "@headlessui/react";
import Button from "../hooks/Button";

const toastBG = [
	{ bg: "white", name: "White/default", message: "Hello World!" },
	{ bg: "dark", name: "Dark", message: "Hello World!" },
	{ bg: "gray", name: "Gray", message: "Hello World!" },
	{ bg: "success", name: "Success", message: "Hello World!" },
	{ bg: "error", name: "Error", message: "Hello World!" },
	{ bg: "info", name: "Info", message: "Hello World!" },
	{ bg: "warning", name: "Warning", message: "Hello World!" },
	{ bg: "glass", name: "Glass", message: "Hello World!" },
	{
		bg: "transparent",
		name: "Transparent",
		message: "H e l l o W o r l d !",
	},
];

const toastColor = [
	{ color: "", name: "Default" },
	{ color: "White", name: "White" },
	{ color: "Dark", name: "Dark" },
];

const Background = () => {
	const { toastMaster } = useToast();

	const [selectedBG, setSelectedBG] = useState(toastBG[0]);

	const bg = selectedBG.bg;
	const message = selectedBG.message;
	const tType = selectedBG.bg === "white" ? "info" : "info";
	const [selectedColor, setSelectedColor] = useState(toastColor[0]);
	const color = selectedColor.color;

	const handleBG = (e) => {
		e.preventDefault();

		toastMaster({
			type: tType + color,
			message: message,
			cancelButton: true,
			transition: "down",
			bg: bg,
		});
	};

	return (
		<div id="backgroundColor">
			<Hei2 classname={"mb-2"}># Toast Background:</Hei2>

			<ItalicText classname={"-mb-2"}>Example below:</ItalicText>
			<form
				onSubmit={handleBG}
				className="flex flex-col mt-2 gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast background color */}
					<div className="overflow-hidden w-fit">
						<label
							className="block text-base font-semibold leading-6"
							style={{ color: "var(--text-color-dark-white)" }}
						>
							Select a toast background color.
						</label>
						<div className="w-full mx-auto mt-2">
							<RadioGroup
								value={selectedBG}
								onChange={setSelectedBG}
							>
								<RadioGroup.Label className="sr-only">
									toast background color
								</RadioGroup.Label>
								<div className="grid w-full grid-cols-2 grid-rows-4 gap-2">
									{toastBG.map((plan) => (
										<RadioGroup.Option
											key={plan.bg}
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
																className="font-medium lowercase"
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
				</div>

				<p className="max-w-prose">
					<small>
						* if the text is invisible try changing the text color. It may have become invisible
						due to the background color.
					</small>
				</p>

				<Button
					classname={"w-full"}
					type={"submit"}
				>
					Pop
				</Button>
			</form>
		</div>
	);
};

export default Background;

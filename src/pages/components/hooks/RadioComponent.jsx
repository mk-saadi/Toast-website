import { RadioGroup } from "@headlessui/react";

const RadioGroupComponent = ({ labelText, radioValue, setRadioValue, options }) => {
	return (
		<div className="overflow-hidden w-fit">
			<label
				className="block text-base font-semibold leading-6"
				style={{ color: "var(--text-color-dark-white)" }}
			>
				{labelText}
			</label>
			<div className="w-full mx-auto mt-2">
				<RadioGroup
					value={radioValue}
					onChange={setRadioValue}
				>
					<RadioGroup.Label className="sr-only">toast color</RadioGroup.Label>
					<div className="grid w-full grid-cols-2 grid-rows-4 gap-2">
						{options.map((option) => (
							<RadioGroup.Option
								key={option.name}
								value={option}
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
													{option.name}
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
	);
};

export default RadioGroupComponent;

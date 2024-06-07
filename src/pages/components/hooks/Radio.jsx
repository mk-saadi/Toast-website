import { RadioGroup } from "@headlessui/react";

const Radio = ({ radioValue, toastMap, radioOptionKey, radioOptionValue }) => {
	return (
		<>
			<div className="overflow-hidden w-fit">
				<label
					className="block text-base font-semibold leading-6"
					style={{ color: "var(--text-color-dark-white)" }}
				>
					Select a toast Type.
				</label>
				<div className="w-full mx-auto mt-2">
					<RadioGroup
						value={radioValue} // this value will be dynamic
						onChange={radioValue} // this value will be dynamic
					>
						<RadioGroup.Label className="sr-only">toast type</RadioGroup.Label>
						<div className="flex flex-row flex-wrap w-full gap-2">
							{toastMap.map((plan) => (
								// this value will be dynamic
								<RadioGroup.Option
									key={plan.radioOptionKey} // this value will be dynamic
									value={plan} // this value will be dynamic
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
														{plan.radioOptionKey} // this value will be dynamic
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
		</>
	);
};

export default Radio;

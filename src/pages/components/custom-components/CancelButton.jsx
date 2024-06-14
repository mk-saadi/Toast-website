import { useToast } from "react-toast-master";
import CodeBlock from "../hooks/CodeBlock";
import Hei2 from "../hooks/Hei2";
import CustomSpan from "../hooks/Highlight";
import ItalicText from "../hooks/ItalicText";
import { useState } from "react";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import Button from "../hooks/Button";

const toastCancel = [
	{ name: "true", value: true },
	{ name: "false", value: false },
];

const CancelButton = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastCancel[0]);

	const codeString = `toastMaster({
	type: "infoStayWhite",
	message: "This is a persistent toast.",
	bg: "gray",
	footer: "You can cancel this toast by clicking on the cancel button. Else this toast won't disappear automatically.",
	cancelButton: ${selected.name},
})`;

	const codeString1 = `const { toastMaster, hideToast } = useToast();`;

	const codeString2 = `toastMaster({	
	type: "infoStay",
	message: "Message from Saber-san",
	bg: "white",
	transition: "top",
	position: "bottomLeft",
	footer: (
		<p>
			Saber san recommended you to watch{" "}
			<a
				className="text-blue-500 underline cursor-pointer"
				onClick={hideToast}
				href="#"
			>
				&quot;Fate/strange Fake&quot;
			</a>
		</p>
	),
	radius: "xl",
	shadow: "info",
	align: "left",
})`;

	const handleToast = (e) => {
		e.preventDefault();

		toastMaster({
			type: "infoStayWhite",
			message: "This is a persistent toast.",
			bg: "gray",
			transition: "down",
			position: "top",
			cancelButton: selected.value,
			footer: "You can cancel this toast by clicking on the cancel button. Else this toast won't disappear automatically.",
		});
	};

	const handleToast1 = (e) => {
		e.preventDefault();

		toastMaster({
			type: "infoStayDark",
			message: "Message from Saber-san",
			bg: "white",
			transition: "top",
			position: "bottomLeft",
			footer: (
				<p>
					Saber san recommended you to watch{" "}
					<a
						className="text-blue-500 underline cursor-pointer"
						onClick={hideToast}
						href="#"
					>
						&quot;Fate/strange Fake&quot;
					</a>
				</p>
			),
			radius: "xl",
			shadow: "dark",
			align: "left",
		});
	};

	return (
		<div
			id="cancelButton"
			className=""
		>
			<Hei2 classname={"mb-2"}># Cancel Button and hideToast():</Hei2>
			<p>
				To hide the toast before toast time runs out or to hide <CustomSpan>persistent</CustomSpan>{" "}
				toast types, you can use <CustomSpan>cancelButton</CustomSpan>. &quot;cancelButton&quot; is a
				boolean. By default it&apos;s is set to <CustomSpan>true</CustomSpan>
			</p>
			<ItalicText classname={"mt-2"}>Example below:</ItalicText>
			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<form onSubmit={handleToast}>
				{/* toast default */}
				<RadioGroupComponent
					labelText="Toast dismiss button."
					radioValue={selected}
					setRadioValue={setSelected}
					options={toastCancel}
				/>

				<div className="flex flex-col gap-x-4 lg:flex-row">
					<Button
						classname={"w-full"}
						type={"submit"}
					>
						Pop
					</Button>
					<HideButton
						clickAction={hideToast}
						classname={"w-full"}
					>
						Hide
					</HideButton>
				</div>
			</form>

			<div className="mt-4">
				<ItalicText>Destructure hideToast:</ItalicText>
				<CodeBlock
					codeString={codeString1}
					language={"jsx"}
				/>

				<p>
					You can destructure <CustomSpan>hideToast</CustomSpan> when you import useToast(). You can
					use it to hide the toast after a certain action.
				</p>

				<ItalicText classname={"mt-2"}>Example below:</ItalicText>
				<CodeBlock
					codeString={codeString2}
					language={"jsx"}
				/>

				<div className="flex flex-col gap-x-4 lg:flex-row">
					<Button
						clickAction={handleToast1}
						type={"button"}
						classname={"w-full"}
					>
						Pop
					</Button>
					<HideButton
						clickAction={hideToast}
						classname={"w-full"}
					>
						Hide
					</HideButton>
				</div>

				<div className="mt-4">
					<p>
						In the above example we are using <CustomSpan>hideToast</CustomSpan> after redirecting
						user to a different website. You get the idea.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CancelButton;

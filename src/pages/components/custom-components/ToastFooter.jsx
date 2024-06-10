import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";

const ToastFooter = () => {
	const { toastMaster, hideToast } = useToast();

	const codeString = `toastMaster({
  type: "infoWhite",
  message: "Toast with footer.",
  footer: <p>This footer is using JSX element.</p>
})`;

	const handleFoot = () => {
		toastMaster({
			type: "infoWhite",
			message: "Toast with footer.",
			position: "top",
			bg: "glass",
			cancelButton: true,
			transition: "down",
			footer: <p>This footer is using JSX element.</p>,
		});
	};

	return (
		<div id="footer">
			<Hei2># Footer && LoadFooter</Hei2>
			<p>
				There are <CustomSpan>two</CustomSpan> kinds of footer in react-toast-master. They are{" "}
				<CustomSpan>&quot;footer&quot;</CustomSpan> and{" "}
				<CustomSpan>&quot;loadFooter&quot;</CustomSpan>.
			</p>
			<ul>
				<li>
					Both &quot;footer&quot; and &quot;loadFooter&quot; can be <CustomSpan>string</CustomSpan>{" "}
					or <CustomSpan>JSX element</CustomSpan>
				</li>
			</ul>
			<p>
				The footer is displayed at the bottom of the toast. You can use &quot;footer&quot; in any
				toast type including the &quot;confirm&quot; toast. The &quot;loadFooter&quot; can only be
				used in &quot;loading&quot; toast, since there is about 7 seconds delay between when the toast
				is displayed and &quot;loadFooter&quot;
			</p>

			<ItalicText classname={"mt-2 -mb-2"}>Example below:</ItalicText>

			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<div className="flex flex-col gap-x-4 lg:flex-row">
				<Button
					classname={"w-full"}
					clickAction={handleFoot}
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
		</div>
	);
};

export default ToastFooter;

import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CodeBlock from "../hooks/CodeBlock";
import Button from "../hooks/Button";
import Hei2 from "../hooks/Hei2";
import CustomSpan from "../hooks/Highlight";

const error = `<button
	onClick={() =>
		toastMaster({
			type: "error",
			message: "successive toast!",
			bg: "white"
		})
	}
>
	error
</button>`;

const successwhite = `<button
	onClick={() =>
		toastMaster({
			type: "successWhite",
			message: "successive toast!",
			bg: "success"
		})
	}
>
	success
</button>`;

const successdark = `<button
	onClick={() =>
		toastMaster({
			type: "successDark",
			message: "successive toast!",
			bg: "white"
		})
	}
>
	success
</button>`;

const Error = () => {
	const { toastMaster } = useToast();

	const successbtn = () => {
		toastMaster({
			type: "success",
			message: "successive toast!",
			bg: "white",
			transition: "down",
			cancelButton: true,
		});
	};

	const successwhitebtn = () => {
		toastMaster({
			type: "successWhite",
			message: "successive toast!",
			bg: "success",
			transition: "down",
			cancelButton: true,
		});
	};

	const successdarkbtn = () => {
		toastMaster({
			type: "successDark",
			message: "successive toast!",
			bg: "white",
			transition: "down",
			cancelButton: true,
		});
	};

	return (
		<>
			<Hei2>Toast Type: Success</Hei2>
			<p className="my-1.5">
				<CustomSpan>Success</CustomSpan> toasts informs the user of a completed action or successful
				operation.
			</p>
			<ItalicText>Success toast has three variations:</ItalicText>
			<ul className="flex flex-row items-center justify-start ml-4 list-disc w-fit gap-x-6 my-1.5">
				<li>"success"</li>
				<li>"successWhite"</li>
				<li>"successDark"</li>
			</ul>
			<div>
				<div className="flex items-center justify-start offset-anchor">
					"success" toast has color [#07bc0c] as it's text color. both "successWhite" and
					"successDark" toast has white and black text color respectively.
				</div>

				<div className="flex flex-col w-full gap-y-4">
					<div>
						<ItalicText>"success" toast example with white background:</ItalicText>
						<CodeBlock codeString={success} />
						<div className="flex justify-end">
							<Button clickAction={successbtn}>pop success</Button>
						</div>
					</div>
					<div>
						<ItalicText>"successWhite" toast example with "success" background:</ItalicText>
						<CodeBlock codeString={successwhite} />
						<div className="flex justify-end">
							<Button clickAction={successwhitebtn}>pop success white</Button>
						</div>
					</div>
					<div>
						<ItalicText>"successDark" toast example with white background:</ItalicText>
						<CodeBlock codeString={successdark} />
						<div className="flex justify-end">
							<Button clickAction={successdarkbtn}>pop success dark</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Error;

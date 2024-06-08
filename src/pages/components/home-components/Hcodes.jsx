import { useToast } from "react-toast-master";
import Button from "../hooks/Button";
import Hei2 from "../hooks/Hei2";
import CodeBlock from "../hooks/CodeBlock";

const codeString = `<button
	onClick={() =>
		toastMaster({
			type: "info",
			message: "Yay! Toast go brrrrr.",
		})
	}
>
	hello
</button>`;

const Hcodes = () => {
	const { toastMaster } = useToast();

	return (
		<>
			<div className="overflow-hidden">
				<Hei2>Simple Example</Hei2>
				<CodeBlock
					language={"jsx"}
					codeString={codeString}
				/>
			</div>

			<div className="flex justify-end">
				<Button clickAction={() => toastMaster({ type: "info", message: "Yay! Toast go brrrrr." })}>
					Pop the toast!
				</Button>
			</div>
		</>
	);
};

export default Hcodes;

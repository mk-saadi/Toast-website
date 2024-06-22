import Button from "../hooks/Button";
import ItalicText from "../hooks/ItalicText";
import CodeBlock from "../hooks/CodeBlock";
import { useToast } from "react-toast-master";
import endImg from "../../../assets/end.png";
import CustomSpan from "../hooks/Highlight";

const Confirm = () => {
	const { toastMaster } = useToast();

	const codeString = `const toastHandler = async () => {
	const confirm = await toastMaster({
		type: "confirmDark",
		message: "Are you sure you want to delete all your data?",
		align: "left",
		footer: "If you delete, it will be 'THE END' for them.",
	});

	if (confirm) {
		toastMaster({
			type: "loadingDark",
			message: "Deleting...",
			transition: "down",
			footer: "You can't recover your data now.",
		});

		setTimeout(() => {
			toastMaster({
				type: "success",
				message: "Your data have been deleted.",
				transition: "down",
				footer: (
					<img
						src={endImg}
						alt=""
						className="h-auto w-28"
					/>
				),
			});
		}, 3000);
	}
};`;

	const toastHandler = async () => {
		const confirm = await toastMaster({
			type: "confirmDark",
			message: "Are you sure you want to delete all your data?",
			align: "left",
			footer: "If you delete, it will be 'THE END' for them.",
		});

		if (confirm) {
			toastMaster({
				type: "loadingDark",
				message: "Deleting...",
				transition: "down",
				footer: "You can't recover your data now.",
			});

			setTimeout(() => {
				toastMaster({
					type: "successDark",
					message: "Your data have been deleted.",
					transition: "down",
					footer: (
						<img
							src={endImg}
							alt=""
							className="h-auto w-28"
						/>
					),
				});
			}, 3000);
		}
	};

	return (
		<div>
			<ItalicText>Confirm toast Example below:</ItalicText>
			<div className="w-full overflow-hidden">
				<CodeBlock
					codeString={codeString}
					language={"jsx"}
				/>
			</div>

			<div className="flex flex-col mt-4 gap-x-4 lg:flex-row">
				<Button
					classname={"w-full"}
					type={"submit"}
					clickAction={toastHandler}
				>
					Pop
				</Button>
			</div>

			<div className="mt-4">
				<p>
					Above is an example of how you can use the confirm toast. You must use the{" "}
					<CustomSpan>await</CustomSpan> keyword for the toast to work.
					<br />
					The variable confirm stores the user&apos;s choice (boolean, <CustomSpan>
						true
					</CustomSpan>{" "}
					for &quot;Confirm&quot;, <CustomSpan>false</CustomSpan> for &quot;Cancel&quot;)
				</p>
			</div>
		</div>
	);
};

export default Confirm;

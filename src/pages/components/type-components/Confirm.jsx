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
			<p>
				Above is an example of how you can use the confirm toast. You must use the{" "}
				<CustomSpan>await</CustomSpan> keyword for the toast to work.
			</p>
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
				<ul className="list-disc">
					<li>
						The <CustomSpan>await</CustomSpan> keyword makes the code wait for the user’s
						response.
					</li>
					<li>
						If the user clicks the confirmation button (e.g., &quot;Confirm&quot;), the confirm
						variable becomes <CustomSpan>true</CustomSpan>.
					</li>
					<li>
						If the user clicks the cancel button (e.g., &quot;Cancel&quot;), the confirm variable
						becomes <CustomSpan>false</CustomSpan>.
					</li>
					<li>
						If confirm is true (meaning the user confirmed), the code proceeds to the next step.
						If confirm is false (meaning the user canceled), nothing further happens.
					</li>
					<li>
						Deleting Data (Simulated): Inside the if (confirm) block, the code simulates data
						deletion.
					</li>
					<li>
						It shows a &quot;loading&quot; toast with the message &quot;Deleting…&quot; and a
						downward transition animation.
					</li>
					<li>
						After a delay (simulated by setTimeout), it shows a &quot;success&quot; toast with the
						message &quot;Your data have been deleted.&quot;
					</li>
					<li>
						The footer of the &quot;success&quot; toast includes an image (represented by the img
						tag).
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Confirm;

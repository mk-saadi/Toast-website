import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import Button from "../hooks/Button";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";
import { useTheme } from "../../ThemeProvider";

const ToastFooter = () => {
	const { toastMaster, hideToast } = useToast();
	const theme = useTheme();

	const codeString = `toastMaster({
  type: "infoWhite",
  message: "Toast with footer.",
  footer: <p>
    This footer is using{" "}
    <span
      className="py-[2px] px-1.5 text-error"
      style={{
        backgroundColor: "var(--ghost)",
        borderRadius: "var(--borderRadius)",
		}}
	>
	  JSX
	</span>{" "}
	  element.
  </p>,
  bg: "glass",
})`;

	const codeStringConfirm = `toastMaster({
  type: "confirmDark",
  message: "Sure you want to delete this user?",
  bg: "white",
  footer: "If you click 'confirm' this user will be permanently deleted. Like, forever from the database.",
  align: "left",
  transition: "fade",
})`;

	const codeStringLoading = `toastMaster({
  type: "loadingWhite",
  message: "Please wait!",
  loadFooter: <p>Whoa! You really waited for 5 seconds.</p>,
})`;

	let toastType, toastBg;
	if (theme === "nord") {
		toastType = "infoWhite";
		toastBg = "glass";
	} else if (theme === "sunset") {
		toastType = "successDark";
		toastBg = "white";
	}

	let toastTypeLoad, toastBgLoad;
	if (theme === "nord") {
		toastTypeLoad = "loadingWhite";
		toastBgLoad = "glass";
	} else if (theme === "sunset") {
		toastTypeLoad = "loadingDark";
		toastBgLoad = "white";
	}

	const handleFoot = () => {
		toastMaster({
			type: toastType,
			message: "Toast with footer.",
			position: "top",
			bg: toastBg,

			transition: "down",
			footer: (
				<p>
					This footer is using{" "}
					<span
						className="py-[2px] px-1.5 text-error"
						style={{
							backgroundColor: "var(--ghost)",
							borderRadius: "var(--borderRadius)",
						}}
					>
						JSX
					</span>{" "}
					element.
				</p>
			),
		});
	};

	const handleFootConfirm = () => {
		toastMaster({
			type: "confirmDark",
			message: "Sure you want to delete this user?",
			position: "center",
			bg: "white",
			transition: "zoom",
			footer: "If you click 'confirm' this user will be permanently deleted. Like, forever from the database.",
			align: "left",
		});
	};

	const handleFootLoading = () => {
		toastMaster({
			type: toastTypeLoad,
			message: "Please wait!",
			position: "top",
			bg: toastBgLoad,
			transition: "down",
			loadFooter: <p>Whoa! You really waited for 5 seconds.</p>,
		});
	};

	return (
		<div id="footer">
			<Hei2># Footer && LoadFooter</Hei2>

			<div className="space-y-2.5">
				<p>
					There are <CustomSpan>two</CustomSpan> kinds of footer in react-toast-master. They are{" "}
					<CustomSpan>footer</CustomSpan> and <CustomSpan>loadFooter</CustomSpan>.
				</p>
				<p>
					Both &quot;footer&quot; and &quot;loadFooter&quot; can be <CustomSpan>string</CustomSpan>{" "}
					or <CustomSpan>JSX element</CustomSpan>
				</p>
				<p>
					The footer is displayed at the bottom of the toast ( except in &quot;confirm&quot; toast
					). You can use &quot;footer&quot; in any toast type. The &quot;loadFooter&quot; can only
					be used in &quot;loading&quot; toast, since there is about 5 seconds delay between when
					the toast is displayed and &quot;loadFooter&quot;
				</p>
			</div>

			<div className="space-y-2.5">
				<div>
					<ItalicText classname={"mt-2 -mb-2"}>
						Example below for &quot;footer&quot; using inline styling:
					</ItalicText>
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

				<div>
					<ItalicText classname={"mt-2 -mb-2"}>
						Example below for &quot;footer&quot; in &quot;confirm&quot;:
					</ItalicText>
					<CodeBlock
						codeString={codeStringConfirm}
						language={"jsx"}
					/>
					<Button
						classname={"w-full"}
						clickAction={handleFootConfirm}
					>
						Pop
					</Button>
				</div>

				<div>
					<ItalicText classname={"mt-2 -mb-2"}>
						Example below for &quot;loadFooter&quot;:
					</ItalicText>
					<CodeBlock
						codeString={codeStringLoading}
						language={"jsx"}
					/>
					<div className="flex flex-col gap-x-4 lg:flex-row">
						<Button
							classname={"w-full"}
							clickAction={handleFootLoading}
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
			</div>
		</div>
	);
};

export default ToastFooter;

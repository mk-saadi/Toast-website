import CodeBlock from "../hooks/CodeBlock";
import Hei2 from "../hooks/Hei2";
import CustomSpan from "../hooks/Highlight";
import ItalicText from "../hooks/ItalicText";

const CancelButton = () => {
	return (
		<div
			id="cancelButton"
			className=""
		>
			<Hei2 classname={"mb-2"}># Cancel Button and hideToast():</Hei2>
			<p>
				To hide the toast before toast time runs out or to hide persistent toast types, you can use{" "}
				<CustomSpan>cancelButton</CustomSpan>. &quot;cancelButton&quot; is a boolean. By default
				cancelButton is set to <CustomSpan>false</CustomSpan>.
			</p>
			<ItalicText classname={"mt-2"}>Example below:</ItalicText>
			<CodeBlock
				// codeString={codeString}
				language={"jsx"}
			/>
			cancel button
		</div>
	);
};

export default CancelButton;

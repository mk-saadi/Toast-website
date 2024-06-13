import Hei2 from "../hooks/Hei2";
import CodeBlock from "../hooks/CodeBlock";

const installNPM = `npm install react-toast-master`;
const installYARN = `yarn add react-toast-master`;

const Installations = () => {
	return (
		<div
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			<Hei2>Installation with</Hei2>
			<h3 className="font-sans font-medium">Install entire package with styles only under 50kb.</h3>
			<div className="flex flex-col mt-4 gap-y-6">
				<div className="flex flex-col">
					<h3 className="text-lg italic font-medium">npm</h3>
					<CodeBlock
						language={"bash"}
						codeString={installNPM}
					/>
				</div>
				<div className="flex flex-col">
					<h3 className="text-lg italic font-medium">yarn</h3>
					<CodeBlock
						language={"bash"}
						codeString={installYARN}
					/>
				</div>
			</div>
		</div>
	);
};

export default Installations;

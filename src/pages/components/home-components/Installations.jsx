import { Copy, SquareCheck } from "lucide-react";
import useClipboard from "../hooks/useClipBoard";
import Hei2 from "../hooks/Hei2";

const Installations = () => {
	const [isCopied, copyToClipboard] = useClipboard();

	const handleCopy = (text) => {
		copyToClipboard(text);
	};

	return (
		<div
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			<Hei2>Installation with</Hei2>
			<h3>Install entire package with styles only under 50kb.</h3>
			<div className="flex flex-col mt-4 gap-y-6">
				<div className="flex flex-col gap-y-1.5">
					<h3 className="text-lg italic font-medium">npm</h3>
					<div
						className="flex flex-row items-center justify-between px-4 py-2 group bg-accent"
						style={{
							backgroundColor: "var(--default)",
							color: "var(--text-color-white-white)",
							borderRadius: "var(--borderRadius)",
							border: "var(--border)",
						}}
					>
						<p>
							<span className="mx-2 text-lg font-medium">$</span> npm i react-toast-master
						</p>
						{isCopied ? (
							<SquareCheck className="duration-200 opacity-0 group-hover:opacity-100" />
						) : (
							<Copy
								className="duration-200 opacity-0 cursor-pointer group-hover:opacity-100"
								size={20}
								onClick={() => handleCopy("npm i react-toast-master")}
							/>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-y-1.5">
					<h3 className="text-lg italic font-medium">yarn</h3>
					<div
						className="flex flex-row items-center justify-between px-4 py-2 group bg-accent"
						style={{
							backgroundColor: "var(--default)",
							color: "var(--text-color-white-white)",
							border: "var(--border)",
							borderRadius: "var(--borderRadius)",
						}}
					>
						<p>
							<span className="mx-2 text-lg font-medium">$</span> yarn add react-toast-master
						</p>
						{isCopied ? (
							<SquareCheck className="duration-200 opacity-0 group-hover:opacity-100" />
						) : (
							<Copy
								className="duration-200 opacity-0 cursor-pointer group-hover:opacity-100"
								size={20}
								onClick={() => handleCopy("yarn add react-toast-master")}
							/>
						)}
					</div>
				</div>
			</div>

			{/* <SyntaxHighlighter
				language="bash"
				style={oneDark}
				wrapLines
				aria-label="code"
			>
				{codeString}
			</SyntaxHighlighter> */}
		</div>
	);
};

export default Installations;

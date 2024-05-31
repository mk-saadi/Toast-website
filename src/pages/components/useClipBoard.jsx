import { useState, useCallback } from "react";

const useClipboard = () => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = useCallback((text) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => setIsCopied(false), 1000);
			})
			.catch(() => {
				setIsCopied(false);
			});
	}, []);

	return [isCopied, copyToClipboard];
};

export default useClipboard;

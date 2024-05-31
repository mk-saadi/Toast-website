import { useEffect, useState } from "react";

const useTheme = () => {
	const [theme, setTheme] = useState("sunset");

	useEffect(() => {
		const currentTheme = document.documentElement.getAttribute("data-theme");
		setTheme(currentTheme || "sunset");
	}, []);

	return theme;
};

export default useTheme;

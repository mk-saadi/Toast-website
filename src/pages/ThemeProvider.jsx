import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("sunset");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "nord" ? "sunset" : "nord"));
		document.documentElement.setAttribute("data-theme", theme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context.theme;
};

export const useToggleTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useToggleTheme must be used within a ThemeProvider");
	}
	return context.toggleTheme;
};

import Hei2 from "../hooks/Hei2";
import useTheme from "../useTheme";
import classNames from "classnames";

const Intro = () => {
	const theme = useTheme();

	return (
		<>
			<Hei2>Introducing</Hei2>
			<h1
				className={classNames("text-5xl font-bold uppercase mt-2 mb-1", {
					"": theme === "nord" || theme === "sunset",
				})}
			>
				react-toast-master
			</h1>
			<h3>React's most customizable toast component.</h3>
		</>
	);
};

export default Intro;

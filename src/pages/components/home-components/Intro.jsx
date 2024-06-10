import Hei2 from "../hooks/Hei2";

const Intro = () => {
	return (
		<>
			<Hei2>Introducing</Hei2>
			<h1
				style={{
					color: "var(--text-color-dark-white)",
				}}
				className="mt-2 mb-1 font-serif text-5xl font-bold uppercase"
			>
				react-toast-master
			</h1>
			<p className="font-sans font-medium">React's most customizable toast component.</p>
		</>
	);
};

export default Intro;

import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";

const toastTR = [
	{ name: "top", message: "Toast from " },
	{ name: "down", message: "Toast from " },
	{ name: "left", message: "Toast from " },
	{ name: "right", message: "Toast from " },
	{ name: "jelly", message: "Toast from " },
	{ name: "zoom", message: "Toast from " },
	{ name: "center", message: "Toast from " },
];

const Transition = () => {
	return <div></div>;
};

export default Transition;

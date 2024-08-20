import { FaAngleDown } from "react-icons/fa6";
import cssVars from "../utils/cssVariables.vars";

const defaultInput100 = {
	$color: cssVars.colorGrey[3],
	$borderColor: cssVars.colorGrey[5],
	$padding: [0.375, 0.75] as [number, number],
	$focusColor: cssVars.colorGrey[0],
	$fontSize: 0.875,
	$width: "100%",
	leftIcon: null,
	rightIcon: null,
};

const defaultInput50 = {
	...defaultInput100,
	$width: "calc(50% - 0.5rem)",
};

const defaultSelect100 = {
	...defaultInput100,
	$focusColor: undefined,
	leftIcon: null,
	rightIcon: <FaAngleDown />,
};

const defaultSelect50 = {
	...defaultSelect100,
	$width: "calc(50% - 0.5rem)",
};

export { defaultInput100, defaultInput50, defaultSelect100, defaultSelect50 };

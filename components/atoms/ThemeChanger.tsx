import { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeChanger: NextPage = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	function toggleTheme() {
		if (theme == "dark") setTheme("light");
		else setTheme("dark");
	}

	if (!mounted) return null;

	return (
		<button onClick={toggleTheme} className="text-2xl">
			{theme === "dark" ? <FaSun /> : <FaMoon />}
		</button>
	);
};

export default ThemeChanger;

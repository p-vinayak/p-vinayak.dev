import { NextPage } from "next";

interface TitleProps {
	content: string;
}

const Title: NextPage<TitleProps> = ({ content }) => {
	return <h1 className="text-3xl font-bold">{content}</h1>;
};

export default Title;

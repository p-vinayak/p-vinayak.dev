import { NextPage } from "next";
import { ReactNode } from "react";

interface SocialLinkProps {
	title: string;
	href: string;
	openInNewTab?: boolean;
	icon: ReactNode;
}

const SocialLink: NextPage<SocialLinkProps> = ({
	title,
	href,
	openInNewTab = true,
	icon,
}) => {
	if (openInNewTab)
		return (
			<a href={href} target="_blank" rel="noopener noreferrer">
				{icon}
			</a>
		);
	else return <a href={href}>{title}</a>;
};

export default SocialLink;

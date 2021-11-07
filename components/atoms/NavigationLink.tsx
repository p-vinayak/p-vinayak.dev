import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface NavigationLinkProps {
	title: string;
	href: string;
	route?: boolean;
}

const NavigationLink: NextPage<NavigationLinkProps> = ({
	title,
	href,
	route = true,
}) => {
	const router = useRouter();

	if (route)
		return (
			<span
				className={
					router.pathname == href
						? "font-bold underline text-lg"
						: "font-bold text-lg"
				}
			>
				<Link href={href}>{title}</Link>
			</span>
		);
	else
		return (
			<span
				className={
					router.pathname == href
						? "font-bold underline text-lg"
						: "font-bold text-lg"
				}
			>
				<a href={href} target="_blank" rel="noopener noreferrer">
					{title}
				</a>
			</span>
		);
};

export default NavigationLink;

import { NextPage } from "next";
import SocialLink from "../atoms/SocialLink";
import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from "react-icons/si";

const Socials: NextPage = () => {
	const socials = [
		{
			title: "GitHub",
			href: "https://github.com/p-vinayak",
			icon: <SiGithub />,
		},
		{
			title: "LinkedIn",
			href: "https://www.linkedin.com/in/v-prataap/",
			icon: <SiLinkedin />,
		},
		{
			title: "Twitter",
			href: "https://twitter.com/v_prataap",
			icon: <SiTwitter />,
		},
		{
			title: "Email",
			href: "mailto:prataap.vinayak@gmail.com",
			icon: <SiGmail />,
		},
	];
	return (
		<div className="flex justify-center">
			<ul className="space-x-6">
				{socials.map((social) => (
					<li key={social.title} className="inline-block text-3xl">
						<SocialLink
							title={social.title}
							href={social.href}
							icon={social.icon}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Socials;

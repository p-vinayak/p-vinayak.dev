import { NextPage } from "next";
import NavigationLink from "../atoms/NavigationLink";

const Navigation: NextPage = () => {
	return (
		<div className="flex justify-center">
			<ul className="space-x-5 lg:space-x-8">
				<li className="inline-block">
					<NavigationLink href="/" title="About" />
				</li>
				<li className="inline-block">
					<NavigationLink href="/projects" title="Projects" />
				</li>
				<li className="inline-block">
					<NavigationLink
						href="/resume.pdf"
						title="Resume"
						route={false}
					/>
				</li>
				<li className="inline-block">
					<NavigationLink href="/contact" title="Contact" />
				</li>
			</ul>
		</div>
	);
};

export default Navigation;

import { NextPage } from "next";
import React from "react";
import Navigation from "../molecules/Navigation";
import Profile from "../molecules/Profile";
import Socials from "../molecules/Socials";

const Info: NextPage = () => {
	return (
		<div className="space-y-5">
			<div>
				<Profile />
			</div>
			<div className="space-y-4">
				<div>
					<Socials />
				</div>
				<div>
					<Navigation />
				</div>
			</div>
		</div>
	);
};

export default Info;

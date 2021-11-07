import { NextPage } from "next";
import React from "react";
import ProfileName from "../atoms/ProfileName";
import ProfilePicture from "../atoms/ProfilePicture";
import ThemeChanger from "../atoms/ThemeChanger";

const Profile: NextPage = () => {
	const profileName = "Vinayak Prataap";
	return (
		<div className="flex flex-col space-y-1">
			<div className="mx-auto">
				<ThemeChanger />
			</div>
			<div className="mx-auto">
				<ProfilePicture imageUrl="/logo.png" />
			</div>
			<div className="mx-auto">
				<ProfileName profileName={profileName} />
			</div>
		</div>
	);
};

export default Profile;

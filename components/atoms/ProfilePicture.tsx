/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

interface ProfilePictureProps {
	imageUrl: string;
}

const ProfilePicture: NextPage<ProfilePictureProps> = ({ imageUrl }) => {
	return (
		<img
			src={imageUrl}
			alt="Vinayak Prataap Profile Picture"
			className="rounded-full border-4 border-black dark:border-white h-28 w-28"
		/>
	);
};

export default ProfilePicture;

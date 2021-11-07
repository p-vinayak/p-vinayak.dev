import { NextPage } from "next";

interface ProfileNameProps {
	profileName: string;
}

const ProfileName: NextPage<ProfileNameProps> = ({ profileName }) => {
	return <p className="text-xl">{profileName}</p>;
};

export default ProfileName;

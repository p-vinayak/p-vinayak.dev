import { NextPage } from "next";

interface ProfileDescriptionProps {
	profileDescription: string;
}

const ProfileDescription: NextPage<ProfileDescriptionProps> = ({
	profileDescription,
}) => {
	return <p>{profileDescription}</p>;
};

export default ProfileDescription;

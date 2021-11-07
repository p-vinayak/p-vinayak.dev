import { NextPage } from "next";
import Info from "../organisms/Info";
import Head from "next/head";

interface ContentPageProps {
	title: string;
	description: string;
	htmlContent: string;
}

const ContentPage: NextPage<ContentPageProps> = ({
	title,
	htmlContent,
	description,
}) => {
	const pageTitle = `Vinayak Prataap - ${title}`;
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="title" content={title} />
				<meta name="description" content={description} />
			</Head>
			<div className="flex flex-col lg:flex-row lg:h-screen lg:justify-center || lg:divide-x lg:divide-y-0 divide-solid divide-y divide-black dark:divide-white">
				<div className="py-4 lg:px-14 lg:my-auto">
					<Info />
				</div>
				<div
					className="prose dark:prose-dark py-6 px-8 lg:px-14 lg:my-auto w-full mx-auto lg:mx-0 lg:overflow-y-auto"
					dangerouslySetInnerHTML={{ __html: htmlContent }}
				></div>
			</div>
		</>
	);
};

export default ContentPage;

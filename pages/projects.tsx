import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import path from "path";
import fs from "fs";
import ContentPage from "../components/templates/ContentPage";
import matter from "gray-matter";
import { marked } from "marked";

export const getStaticProps: GetStaticProps = async () => {
  const file = path.join(process.cwd(), "/content/projects.md");
  const fileContents = fs.readFileSync(file, "utf-8").toString();
  const markdown = matter(fileContents);
  const htmlContents = marked(markdown.content);
  return { props: { htmlContents, data: markdown.data } };
};

const Projects: NextPage = ({
  htmlContents,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ContentPage
      title={data.title}
      description={data.description}
      htmlContent={htmlContents}
    />
  );
};

export default Projects;

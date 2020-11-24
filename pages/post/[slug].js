import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function PostTemplate({ content, data }) {
  const frontmatter = data;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      {frontmatter.date}
      <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

import matter from "gray-matter";

export default function PostTemplate({ content, data }) {
  const frontmatter = data;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{content}</p>
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

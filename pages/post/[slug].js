export default function PostTemplate(props) {
  return <div>Where is "{props.slug}"?</div>;
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  return { slug };
};

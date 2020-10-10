import Head from "next/head";

export default function Home({ title }) {
  return (
    <>
      <Head>
        <title>bureschcovsky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{title}</div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "bureschkovscy" }, // will be passed to the page component as props
  };
}

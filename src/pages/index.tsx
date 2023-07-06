import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Templates/Layout";
// import LandingPageTemplate from "../../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>ghaly.dev</title>
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/60167960/229319877-77600973-dc1f-4b2a-b0da-ed38a67eec0e.png"
        />
        <meta name="description" content="Created by Rachmat Ghaly." />
        <script
          src="https://kit.fontawesome.com/0ae515efac.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Layout>
        <div>{/* <p className="text-white">Page home ghaly</p> */}</div>
      </Layout>
      {/* <LandingPageTemplate /> */}
    </>
  );
};

export default Index;

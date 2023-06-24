import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>ghaly.dev</title>
        <meta name="description" content="Created by Rachmat Ghaly." />
      </Head>
      <LandingPageTemplate />
    </>
  );
};

export default Index;

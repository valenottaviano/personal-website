import Head from "next/head";
import { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import MeSection from "../components/MeSection";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="icon/favicon.png"></link>
      </Head>
      <HeroSection />
      <MeSection />
      <BlogSection />
    </Fragment>
  );
}

import { Pages } from "config";
import Head from "next/head";
import { getTitle } from "utils/PageTitle";

const title = getTitle(Pages.About);

const About = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
  </>
);

export default About;

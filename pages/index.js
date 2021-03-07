import Layout from "../components//custom/Layout";
import Head from "next/head";
import Socials from "../components/socials";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Heath Blandford | Exactly who you were looking for...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <h1 className="text-center text-3xl my-5 md:text-7xl">
        Hey 👋 I'm Heath!
      </h1>
      <div className="grid mb-12">
        <div className="place-self-center shadow-lg grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-heathRows p-5 md:p-10 w-4/6 h-auto">
          <div className="place-self-center">
            <Image
              className="w-full"
              src="/good-me.jpg"
              alt="a nice picture of me"
              id="good-me"
              height={500}
              width={700}
            />
          </div>
          <div className="md:ml-10 mb-10">
            <p>
              I'm a Petroleum Engineer by education (B.S. in Petroluem
              Engineering from Marietta College in 2016) <br />
              <br />
              Previously a Mechanical Engineer. <br />
              <br />
              Customer Success Engineer & Web Developer.
            </p>
            <br />
            <p>In my free time, I like to do a few things:</p>
            <ul>
              <li>3D Print</li>
              <li>Play video games</li>
              <li>Cook</li>
              <li>Read</li>
            </ul>
            &nbsp;
            <p>Stuff I'm into right now:</p>
            <ul>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Python</li>
              <li>Consumer Technology</li>
              <li>And according to Spotify, Alternative R&B</li>
            </ul>
            &nbsp;
            <p>📍 Currently in: Cincinnati, OH</p>
          </div>
          <Socials />
        </div>
      </div>
    </Layout>
  );
}

import Layout from "../components//custom/Layout";
import Head from "next/head";

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
      <h1 className="text-center text-7xl">Hey 👋 I'm Heath!</h1>
      <div className="grid">
        <div className="place-self-center shadow-lg grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-heathRows p-5 md:p-10 w-5/6 h-auto">
          <div className="place-self-center">
            <img
              className="w-full"
              src="/good-me.jpg"
              alt="a nice picture of me"
              id="good-me"
            />
          </div>
          <div className="ml-10">
            <p>
              I'm a Petroleum Engineer by education (B.S. in Petroluem
              Engineering from Marietta College in 2016) <br />
              <br />
              I'm a Mechanical Design Engineer by Profession <br />
              <br />
              I'm a Web Developer by Passion.
            </p>
            <br />
            <p>In my free time, I like to do a few things:</p>
            <ul>
              <li>3D Print</li>
              <li>Play video games</li>
              <li>Cook</li>
            </ul>
            &nbsp;
            <p>Stuff I'm into right now:</p>
            <ul>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Python</li>
              <li>Consumer Technology</li>
              <li>Hip Hop and House music</li>
            </ul>
            &nbsp;
            <p>📍 Currently in: Dallas, TX</p>
          </div>
          <div className="flex col-span-2 place-self-center mt-10">
            <a href="https://www.twitter.com/whoisheath_">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="twitter.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.linkedin.com/in/heathblandford">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="linkedin.svg"
                alt="linkedin"
              />
            </a>
            <a href="https://www.github.com/heathblandford">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="github.svg"
                alt="github"
              />
            </a>
            <a href="https://www.last.fm/user/cloolis">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="lastfm.svg"
                alt="lastfm"
              />
            </a>
            <a href="https://www.instagram.com/whoisheath_">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="instagram.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

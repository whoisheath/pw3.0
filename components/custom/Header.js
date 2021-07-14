import Link from "next/link";
import Head from "next/head";

const Header = () => (
  <div>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <div className="headerMain">
      <Link href="/">
        <a className="main-link">Home</a>
      </Link>
      <Link href="/contact">
        <a className="main-link">Contact Me</a>
      </Link>
      <Link href="/blog">
        <a className="main-link">Blog</a>
      </Link>
      <Link href="/food">
        <a className="main-link">Food</a>
      </Link>
      <Link href="/projects">
        <a className="main-link">Projects</a>
      </Link>
    </div>
    <style global jsx>{`
      .headerMain {
        border-bottom: 2px solid #333;
        text-align: center;
        margin-bottom: 50px;
        font-family: "Roboto", sans-serif;
      }
      .main-link {
        margin-right: 15px;
      }
      .main-link:link,
      .main-link:visited {
        border-bottom: 2px solid transparent;
        color: black;
        padding: 14px 25px;
        margin-bottom: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }

      .main-link:hover,
      .main-link:active {
        border-bottom: 2px solid black;
      }
      @media (max-width: 950px) {
        .headerMain {
          margin: 0 auto;
          width: 80vw;
        }
      }
    `}</style>
  </div>
);

export default Header;

import Container from "../components/container";
import MoreStories from "../components/food/more-food";
import HeroPost from "../components/food/food-hero-post";
import Intro from "../components/food/food-intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/foodApi";
import Head from "next/head";
import Meta from "../components/meta";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Meta />
      <Layout>
        <Head>
          <title>Food</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import { getApolloClient } from "lib/apollo-client";
import { Layout } from "../layout/Layout";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";

import Hero from "../components/Hero/Hero";

import styles from "../styles/Home.module.css";
import { Section } from "../styles/GlobalComponents";

export default function Home({ page, posts, heroSectionData }) {
  const { title, description } = page;
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Hero heroSectionData={heroSectionData} />
          </div>
          <div className="col-md-6">
            <BgAnimation />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{description}</p>

          <ul className={styles.grid}>
            {posts &&
              posts.length > 0 &&
              posts.map((post) => {
                return (
                  <li key={post.slug} className={styles.card}>
                    <Link href={post.path}>
                      <a>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: post.title,
                          }}
                        />
                      </a>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                    />
                  </li>
                );
              })}

            {!posts ||
              (posts.length === 0 && (
                <li>
                  <p>Oops, no posts found!</p>
                </li>
              ))}
          </ul>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        page(id: "cG9zdDoxMA==") {
          heroSection {
            description
            fieldGroupName
            title
            image {
              altText
              title(format: RAW)
              sourceUrl
            }
          }
        }
        generalSettings {
          title
          description
        }
        posts(first: 10000) {
          edges {
            node {
              id
              excerpt
              title
              slug
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        path: `/posts/${post.slug}`,
      };
    });

  const page = {
    ...data?.data.generalSettings,
  };

  const heroSectionData = data?.data.page.heroSection;

  return {
    props: {
      page,
      posts,
      heroSectionData
    },
  };
}

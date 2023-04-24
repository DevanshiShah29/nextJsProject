import Head from 'next/head';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import { Layout } from '../layout/Layout';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Home.module.css';

export default function Home({ page, posts, heroSectionData, aboutPageData, aboutSliderData }) {
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

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <About aboutSectionData={aboutPageData} aboutSliderData={aboutSliderData} />
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
                            __html: post.title
                          }}
                        />
                      </a>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt
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
        page(id: "cG9zdDo3") {
          heroSection {
            herodescription
            herotitle
            fieldGroupName
            heroimage {
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
    `
  });

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        path: `/posts/${post.slug}`
      };
    });

  const page = {
    ...data?.data.generalSettings
  };

  const heroSectionData = data?.data.page.heroSection;

  const aboutData = await apolloClient.query({
    query: gql`
      {
        page(id: "cG9zdDo3") {
          aboutsection {
            title
            button
            description
          }
        }
        aboutSliders {
          nodes {
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl
                title
                uri
              }
            }
          }
        }
      }
    `
  });

  const aboutPageData = aboutData?.data.page.aboutsection;
  const aboutSliderData = aboutData?.data.aboutSliders;

  return {
    props: {
      page,
      posts,
      heroSectionData,
      aboutPageData,
      aboutSliderData
    }
  };
}

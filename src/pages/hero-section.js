import Head from 'next/head';
import { gql } from '@apollo/client';

import { getApolloClient } from 'lib/apollo-client';

import styles from '../styles/Home.module.css';

export default function Home({ posts, pageData }) {
  const { herodescription, herotitle } = pageData;
  return (
    <div className={styles.container}>
      <Head>
        <title>{herotitle}</title>
        <meta name="description" content={herodescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{herotitle}</h1>

        <p className={styles.description}>{herodescription}</p>

        <ul className={styles.grid}>
          {!posts ||
            (posts.length === 0 && (
              <li>
                <p>Oops, no posts found!</p>
              </li>
            ))}
        </ul>
      </main>
    </div>
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
      }
    `
  });

  const pageData = data?.data.page.heroSection;
  // const posts = data?.data.posts.edges
  //   .map(({ node }) => node)
  //   .map((post) => {
  //     return {
  //       ...post,
  //       path: `/test`,
  //     };
  //   });

  // const page = {
  //   ...data?.data.generalSettings,
  // };

  return {
    props: {
      pageData
    }
  };
}

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            {/* You can replace this with your penguin character */}
            <div className={styles.character}>🐧</div>
          </div>
          <h1 className={styles.heroTitle}>Welcome to Sunny's Tech Blog</h1>
          <p className={styles.heroSubtitle}>Personal Tech Blog & Portfolio</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/about">
              About
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/blog">
              Blogs
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/notes">
              Notes
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/archives">
              Archives
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal tech blog and portfolio">
      <HomepageHeader />
    </Layout>
  );
}
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

const features = [
  {
    title: 'Solana Labs📚',
    content: "Solana Labs builds products, tools and reference implementations that can be used on the Solana blockchain.",
  },
  {
    title: 'Solana Foundation📝',
    content: 'Non-profit foundation based in Zug, Switzerland, dedicated to the decentralization, adoption, and security of the Solana ecosystem.',
  },
  {
    title: 'Powerful & Fast🐱',
    content: 'Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.',
  },
  {
    title: 'Solana Core Documentation 🧠',
    content: 'Read and explore the core Solana blockchain documentation, including the Solana programming model and RPC API.',
  },
  {
    title: 'Solana Validator Client 💻',
    content: 'Read and explore the documentation for the Validator Client originally developed by Solana Labs, including the Solana CLI tool-suite and validator architecture.',
  },
  {
    title: 'Solana Developer Resources 🚀',
    content: 'A collection of resources for learning in the Solana ecosystem, from education guides to popular ecosystem tooling.',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink="/"
      description="Set up a modern web app by running one command."
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create SOLANA logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('blog')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2 className={styles.featureTitle}>{title}</h2>
                  <p className={styles.featureContent}>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

<div className={clsx( styles.heroBanner)}>
<div className="container">
  <h3 className="text-lg font-semibold">
    🚨 The Solana Documentation has moved! 🚨
  </h3>
  <p className="text-white">
    Recently, the original Solana documentation was split into two different documentation websites:
  </p>

    <li>
      <Link href="https://solana.com" className="!text-white">
        🌐 solana.com/docs
      </Link>
    </li>
    <li>
      <Link href="https://www.543x.com" className="!text-white">
        🌐 docs.solanalabs.com
      </Link>
    </li>

  <p className="text-white">
    The Solana blockchain's core documentation can now be found on{" "}
    <Link href="https://www.543x.com" className="!text-white">
      solana.com/docs
    </Link>, which contains all the common information an application developer would need to know and understand to build on Solana, including the Solana programming model's{" "}
    <Link href="https://d.543x.com" className="!text-white">
      Core Concepts 📚
    </Link>, <Link href="https://a.543x.com" className="!text-white">Solana RPC methods 🔍</Link>, and writing onchain programs.
  </p>
  <p className="text-white">
    The documentation for the original Solana Validator Client developed by Solana Labs can now be found on{" "}
    <Link href="https://b.543x.com" className="!text-white">
      docs.solanalabs.com
    </Link>, which contains all the information specific to that validator client's implementation and inner workings, including{" "}
    <Link href="https://c.543x.com" className="!text-white">
      installing the Solana CLI tool-suite 🔧
    </Link>, the{" "}
    <Link href="https://e.543x.come" className="!text-white">
      validator's architecture 🏗️
    </Link>, and{" "}
    <Link href="https://r.543x.com" className="!text-white">
      how to operate a validator ⚙️
    </Link>.
  </p>
  </div>
  </div>

    </Layout>
  );
}

export default Home;

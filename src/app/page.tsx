import styles from './page.module.css';
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <Link href="/profiles/aboutme">About Me</Link>
      </h1>
    </main>
  );
};

export default Home;

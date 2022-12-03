import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineQuestionCircle, AiFillHome } from 'react-icons/ai';

import styles from 'styles/notFound.module.scss';

const { notFoundContent, notFoundInfo, homeButton } = styles;

const NotFound = () => {
  return (
    <>
      <Head>
        <title> 404 Not Found - Scheduler </title>
        <meta
          name="description"
          content="not found page, scheduler by @Amaury Vasquez"
        />
      </Head>
      <div className={notFoundContent}>
        <article className={notFoundInfo}>
          <h2> 404 Not found! </h2>
          <span>
            <AiOutlineQuestionCircle />
          </span>
          <p>
            {`Seems like the page you were looking for doesn't exists or couldn't
            be accessed to.`}
          </p>
          <Link className={homeButton} href="/">
            <AiFillHome />
            Return to home page
          </Link>
        </article>
      </div>
    </>
  );
};

export default NotFound;

import Head from 'next/head';
import Link from 'next/link';
import { BiTask } from 'react-icons/bi';
import { TfiAgenda } from 'react-icons/tfi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { MdOutlineSchedule } from 'react-icons/md';

import styles from 'styles/home.module.scss';
import { Layout } from 'components/layout/Layout';

const {
  homeContent,
  titleText,
  welcomeText,
  features,
  articleFeature,
  featureTitle,
} = styles;

export default function Home() {
  return (
    <>
      <Head>
        <title> Scheduler - Tool for day to day organization </title>
        <meta
          name="description"
          content="Scheduler, free tool where you can create, organize, edit and view your day to day with different utilities, like tasks maker, scheduler and agenda"
        />
      </Head>
      <article className={homeContent}>
        <h1 className={titleText}>
          <MdOutlineSchedule />
          scheduler
        </h1>
        <p className={welcomeText}>
          A great tool for day to day organization. <br />
          Quickly create, edit and view your schedule.
        </p>
      </article>
      <div className={features}>
        <Link className={articleFeature} href="/schedule">
          <h2 className={featureTitle}>
            <AiOutlineSchedule /> Schedule
          </h2>
          <p>
            Manage your college subjects, add different fields for each one,
            including the hours in which you are taking the class, teacher name,
            classroom location, subject name, subject grades.
          </p>
        </Link>
        <Link className={articleFeature} href="/agenda">
          <h2 className={featureTitle}>
            <TfiAgenda /> Agenda
          </h2>
          <p>
            Store your future events, keep updated of the ones that are close
            and receive notifications according to what is better for you. You
            can also store important dates related to your school subjects.
          </p>
        </Link>
        <Link className={articleFeature} href="/tasks">
          <h2 className={featureTitle}>
            <BiTask /> Tasks
          </h2>
          <p>
            {`Organize your pending tasks, make a list of the ones you've
            completed and the ones you haven't, it is ideal for homework
            organization, specially if you want to segment a homework into tiny
            pieces.`}
          </p>
        </Link>
      </div>
    </>
  );
}

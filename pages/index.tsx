import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

import styles from 'styles/pages/home.module.scss';
import { useFeatures } from 'hooks/useFeatures';

const {
  homeContent,
  titleText,
  text,
  featuresLayout,
  articleFeature,
  featureTitle,
  subtitleText,
} = styles;

export default function Home() {
  const { features, logo } = useFeatures();

  return (
    <>
      <Head>
        <title> Planner - Herramienta estudiantil para la organización </title>
        <meta
          name="description"
          content="Planner, herramienta gratuita para el estudiante que busca mejorar su organización en el día a día"
        />
      </Head>
      <article className={homeContent}>
        <h1 className={titleText}>
          {logo.icon}
          {logo.title}
        </h1>
        <p className={text}>
          {logo.speech.map((speech, i) => (
            <Fragment key={'homegreeting:' + i}>
              {speech}
              {i < logo.speech.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      </article>
      <div className={featuresLayout}>
        {features.map((feature, i) => (
          <Link
            className={articleFeature}
            href={feature.path}
            key={feature.path + `feature:${i}`}
          >
            <h2 className={featureTitle}>
              {feature.icon}
              {feature.title}
            </h2>
            <p>{feature.description}</p>
          </Link>
        ))}
      </div>
      <article className={homeContent}>
        <h2 className={subtitleText}>Empieza hoy!</h2>
        <p className={text}>
          <Link href={'/register'}> Crea una cuenta </Link>{' '}
          {`en caso de no contar con una`} <br />O
          <Link href={'/register'}> inicia sesión </Link> si ya cuentas con una
          cuenta existente
        </p>
      </article>
    </>
  );
}

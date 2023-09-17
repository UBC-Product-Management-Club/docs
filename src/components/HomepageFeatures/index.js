import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HeroContainer from "../HeroContainer/HeroContainer";
import YourExperience from '../YourExperience/YourExperience';
import Alumni from '../Alumni/Alumni';
import Experts from '../Experts/Experts';

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className='px-[1.6rem]'>
      <HeroContainer />
      <YourExperience />
      <Experts />
      {/* <Alumni /> */}
    </div>
  );
}

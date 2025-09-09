import React from 'react';
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection';
import StorySection from '../story/StorySection';
import TeamSection from '../team/TeamSection';
import StoreSection from '../store/StoreSection';

const AboutMain = ({ teamStaticData, storyStaticData, storeStaticData }) => (
  <>
    <BreadcrumbSection title="About Us" current="About" />
    <StorySection stats={storyStaticData.stats} content={storyStaticData.content} />
    <TeamSection teamStaticData={teamStaticData} />
    <StoreSection storeSectionData={storeStaticData} />
  </>
);

export default AboutMain;

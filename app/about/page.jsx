import Layout from '@/component/layout/Layout';
import AboutMain from '@/component/main/AboutMain';

import { storeSectionData, storySectionData, teamData } from '@/data/Data';

export const metadata = {
  title: 'About',
  description: 'Developed by Raven Rock Technology',
};



export default async function AboutPage() {


  return (
    <Layout>
      <AboutMain
        teamStaticData={teamData}
        storyStaticData={storySectionData}
        storeStaticData={storeSectionData}
      />
    </Layout>
  );
}

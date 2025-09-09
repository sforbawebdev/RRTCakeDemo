// app/faq/page.js

import Layout from '@/component/layout/Layout';
import FaqMain from '@/component/main/FaqMain';
import { accordionList as faqStaticData } from '@/data/Data';

export const metadata = {
  title: 'FAQ',
  description: 'Developed by Raven Rock Technology',
};

export default function FAQPage() {
  return (
    <Layout>
      <FaqMain faqStaticData={faqStaticData} />
    </Layout>
  );
}

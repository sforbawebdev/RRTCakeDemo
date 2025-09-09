import Layout from '@/component/layout/Layout';
import FaqMain from '@/component/main/FaqMain';

export const metadata = {
  title: 'FAQ',
  description: 'Developed by Raven Rock Technology',
};

async function getFaqData() {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  try {
    const res = await fetch(`${baseUrl}/api/faqData`, { cache: 'no-store' });
    const faqStaticData = await res.json();
    return { faqStaticData };
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    return { faqStaticData: [] };
  }
}

export default async function FAQPage() {
  const { faqStaticData } = await getFaqData();

  return (
    <Layout>
      {faqStaticData && <FaqMain faqStaticData={faqStaticData} />}
    </Layout>
  );
}

import Layout from '@/component/layout/Layout';
import ContactMain from '@/component/main/ContactMain';

export const metadata = {
  title: 'Contact',
  description: 'Developed by Raven Rock Technology',
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactMain />
    </Layout>
  );
}

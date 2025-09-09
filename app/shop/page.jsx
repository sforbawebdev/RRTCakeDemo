import ShopMain from '@/component/main/ShopMain';
import Layout from '@/component/layout/Layout';

// For Next.js App Router (App Directory), use metadata instead of <Head>
export const metadata = {
  title: 'Verda Shop',
  description: 'Developed By Raven Rock Technology',
  icons: {
    icon: '/images/favicon.png'
  },
};

export default function ShopPage() {
  return (
    <Layout>
      <ShopMain />
    </Layout>
  );
}

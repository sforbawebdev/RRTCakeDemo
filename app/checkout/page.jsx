import Layout from '@/component/layout/Layout';
import CheckoutMain from '@/component/main/CheckoutMain';

export const metadata = {
  title: 'Checkout',
  description: 'Developed by Raven Rock Technology',
};

export default function CheckoutPage() {
  return (
    <Layout>
      <CheckoutMain />
    </Layout>
  );
}

import Layout from '@/component/layout/Layout';
import CartMain from '@/component/main/CartMain';

export const metadata = {
  title: 'Cart',
  description: 'Developed by Raven Rock Technology',
};

export default function CartPage() {
  return (
    <Layout>
      <CartMain />
    </Layout>
  );
}

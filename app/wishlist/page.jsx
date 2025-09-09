// app/wishlist/page.js

import Layout from '@/component/layout/Layout';
import WishListMain from '@/component/main/WishListMain';

export const metadata = {
  title: 'Wishlist',
  description: 'Developed By Raven Rock Technology',
};

export default function WishlistPage() {
  return (
    <Layout>
      <WishListMain />
    </Layout>
  );
}

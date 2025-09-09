// app/account/page.js

import Layout from '@/component/layout/Layout';
import AccountMain from '@/component/main/AccountMain';

export const metadata = {
  title: 'Account',
  description: 'Developed By Raven Rock Technology',
};

export default function AccountPage() {
  return (
    <Layout>
      <AccountMain />
    </Layout>
  );
}

// app/blog/page.js

import Layout from '@/component/layout/Layout';
import BlogMain from '@/component/main/BlogMain';

export const metadata = {
  title: 'Blog',
  description: 'Developed By Raven Rock Technology',
};

export default function BlogPage() {
  return (
    <Layout>
      <BlogMain />
    </Layout>
  );
}

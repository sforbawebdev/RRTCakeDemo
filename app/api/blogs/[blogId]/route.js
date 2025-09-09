// app/api/blog/[blogId]/route.js
import { NextResponse } from 'next/server';
import { blogList } from '@/data/Data';

export async function GET(_request, { params }) {
  const blogId = params?.blogId;
  if (!blogId) {
    return NextResponse.json({ message: 'Missing blogId' }, { status: 400 });
  }

  const blogData = blogList.find((blog) => String(blog.slug) === String(blogId));

  if (blogData) {
    return NextResponse.json(blogData, { status: 200 });
  }

  return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
}


import Layout from '@/component/layout/Layout'
import BlogDetailsMain from '@/component/main/BlogDetailsMain'
import React from 'react'

const blogDetails = ({params}) => {
 const { id } = params;



  return (
        <Layout>
        <BlogDetailsMain id={id} />
        </Layout>
  )
}

export default blogDetails
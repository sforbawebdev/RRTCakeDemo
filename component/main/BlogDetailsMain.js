"use client";
import React, { useEffect, useState } from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import BlogDetailSection from '../blog/BlogDetailSection'

const BlogDetailsMain = ({id}) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
      // Fetch the product data from your API here
      async function fetchProductData() {
        try {
          const response = await fetch(`/api/blogs/${id}`); // Make sure your API route matches the path
          console.log(response);
          if (response.ok) {
            const productData = await response.json();
            setProduct(productData);
          } else {
            // Handle error
            console.log({message:'Error occured fetching blog'});
          }
        } catch (error) {
          // Handle error
          console.log({message:'Blog Api call error'});
        }
      }

      if (id) {
        fetchProductData();
      }
    }, [id]);
  return (
    <>
        <BreadcrumbSection title={"Blog Details"} current={"Blog Details"}/>
        <BlogDetailSection product={product}/>
    </>
  )
}

export default BlogDetailsMain
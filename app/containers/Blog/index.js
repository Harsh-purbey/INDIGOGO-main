import { BlogCopyright, BlogDisplay, BlogFotter, BlogNav } from '@/components';
import React, { Fragment } from 'react';

const Blog = () => {
  return (
    <Fragment>
      <BlogNav />
      <BlogDisplay />
      <BlogFotter />
      <BlogCopyright />
    </Fragment>
  );
};

export default Blog;

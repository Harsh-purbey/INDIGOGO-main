import React from 'react';
import { Loading } from '@/components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() => import('./Landing'), {
  fallback: <Loading />,
});

//blog

export const Blog = loadable(() => import('./Blog'), {
  fallback: <Loading />,
});

export const Collections = loadable(() => import('./Collections'), {
  fallback: <Loading />,
});

export const DynamicBlog = loadable(() => import('./DynamicBlog'), {
  fallback: <Loading />,
});

// Static Pages
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loading />,
});

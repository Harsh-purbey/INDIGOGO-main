import { BlogCopyright, BlogNav } from '@/components';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const DynamicBlog = () => {
  const { id } = useParams();
  const arr = [
    { id: 0, img: '../images/car1.jpg' },
    { id: 1, img: '../images/car2.jpg' },
    { id: 2, img: '../images/car3.jpg' },
    { id: 3, img: '../images/car4.jpg' },
    { id: 4, img: '../images/car5.jpg' },
    { id: 5, img: '../images/car6.jpg' },
  ];
 
  return (
    <Fragment>
      <BlogNav />
      <div className="p-8 w-full">
        <div className="w-full">
          <img src={arr[id].img} alt="Image" className="w-full" />
        </div>
        <h1 className="text-center text-4xl font-bold p-8">LETs GO!</h1>
      </div>
      <BlogCopyright />
    </Fragment>
  );
};

export default DynamicBlog;

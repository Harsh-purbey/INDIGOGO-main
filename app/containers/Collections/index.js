import {
  CollectionCards,
  CollectionDiscription,
  CollectionNavbar,
  Copyright,
  Fotter,
  OfferCaption,
} from '@/components';
import React, { Fragment } from 'react';

const Collections = () => {
  return (
    <Fragment>
      <OfferCaption />
      <CollectionNavbar />
      <CollectionDiscription />
      <CollectionCards />
      <Fotter />
      <Copyright />
    </Fragment>
  );
};

export default Collections;

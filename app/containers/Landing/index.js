import React, { Fragment } from 'react';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import {
  Welcome,
  PopularCampaigns,
  OfferCaption,
  DisplayScreen,
  ExploreCollections,
  FotterForm,
  FooterBlogs,
  Fotter,
  Copyright,
} from '@/components';

function Landing() {
  return (
    <Fragment>
      <Helmet>
        <html lang={i18next.language} dir={i18next.dir(i18next.language)} />
      </Helmet>
      <OfferCaption />
      <DisplayScreen />
      <PopularCampaigns />
      <ExploreCollections />
      <FotterForm />
      <FooterBlogs />
      <Fotter />
      <Copyright />
      <Welcome />
    </Fragment>
  );
}

export default Landing;

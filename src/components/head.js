import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/diana-icon.png';
import ogImage from '@images/og.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://dianabeatricewijaya.github.io/" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="57x57" href={favicon} />
    <link rel="apple-touch-icon" sizes="60x60" href={favicon} />
    <link rel="apple-touch-icon" sizes="72x72" href={favicon} />
    <link rel="apple-touch-icon" sizes="76x76" href={favicon} />
    <link rel="apple-touch-icon" sizes="114x114" href={favicon} />
    <link rel="apple-touch-icon" sizes="120x120" href={favicon} />
    <link rel="apple-touch-icon" sizes="144x144" href={favicon} />
    <link rel="apple-touch-icon" sizes="152x152" href={favicon} />
    <link rel="apple-touch-icon" sizes="180x180" href={favicon} />
    <link rel="icon" type="image/png" sizes="192x192" href={favicon} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
    <meta name="msapplication-TileColor" content={config.colors.navy} />
    <meta name="msapplication-TileImage" content={favicon} />
    <meta name="theme-color" content={config.colors.navy} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};

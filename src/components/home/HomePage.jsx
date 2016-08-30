import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const introPictureUrl = require('../../images/intro-example.gif');

function HomePage(props) {
  const baseClass = 'home-page';
  return (
    <DocumentTitle title={props.locales.title}>
      <div className={baseClass}>
        <h1>Home Page</h1>
        <h3>{props.shortInfo}</h3>
        <img style={{ height: 400 }} src={introPictureUrl} alt="Intro" />
      </div>
    </DocumentTitle>
  );
}

HomePage.propTypes = {
  shortInfo: PropTypes.string.isRequired,
  advantages: PropTypes.array.isRequired,
  locales: PropTypes.object.isRequired,
};

export default HomePage;

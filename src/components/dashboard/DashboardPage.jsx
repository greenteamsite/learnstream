import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import StartBox from './StartBox';

function DashboardPage(props) {
  const baseClass = 'dashboard-page';
  return (
    <DocumentTitle title={props.locales.title}>
      <section className={baseClass}>
        <article>
          <StartBox
            title={props.currentModule.title}
            subtitle={props.currentModule.subtitle}
            cardText="Progress: 26%"
            cardHeader={props.currentUnit.title}
            cardDescription={props.currentUnit.shortInfo}
            linkToStart={props.linkToStart}
            btnLabel={props.isStart ? props.locales.startBtnText : props.locales.continueBtnText}
          />
        </article>
        <article>
          <StartBox
            title={props.currentModule.title}
            subtitle="current course"
            cardText="Progress: 0%"
            cardHeader={props.currentUnit.title}
            cardDescription={props.currentUnit.shortInfo}
            linkToStart={props.linkToStart}
            btnLabel={props.isStart ? props.locales.startBtnText : props.locales.continueBtnText}
          />
        </article>
      </section>
    </DocumentTitle>
  );
}

DashboardPage.propTypes = {
  currentModule: PropTypes.object.isRequired,
  currentUnit: PropTypes.object.isRequired,
  isStart: PropTypes.bool.isRequired,
  linkToStart: PropTypes.string,
  locales: PropTypes.object.isRequired,
};

export default DashboardPage;

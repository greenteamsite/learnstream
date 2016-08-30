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
            title={props.currentCourse.title}
            subtitle="current course"
            cardText="Progress: 26%"
            cardHeader={props.currentCourse.currentUnit.title}
            cardDescription={props.currentCourse.currentUnit.shortInfo}
            linkToStart={props.linkToStart}
            btnLabel={props.locales.continueBtnText}
          />
        </article>
        <article>
          <StartBox
            title={props.currentCourse.title}
            subtitle="current course"
            cardText="Progress: 0%"
            cardHeader={props.currentCourse.currentUnit.title}
            cardDescription={props.currentCourse.currentUnit.shortInfo}
            linkToStart={props.linkToStart}
            btnLabel={props.locales.startBtnText}
          />
        </article>
      </section>
    </DocumentTitle>
  );
}

DashboardPage.propTypes = {
  currentCourse: PropTypes.object.isRequired,
  linkToStart: PropTypes.string,
  locales: PropTypes.object.isRequired,
};

export default DashboardPage;

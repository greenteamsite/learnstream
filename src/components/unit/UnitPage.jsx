import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import UnitBox from './UnitBox';

function UnitPage(props) {
  const baseClass = 'unit-page';
  return (
    <DocumentTitle title={props.locales.title}>
      <section className={baseClass}>
        <article>
          <UnitBox
            title={props.unit.title}
            subtitle={props.unit.subtitle}
            pictureUrl={props.unit.pictureUrl}
            info={props.unit.info}
            sections={props.unit.sections}
            tests={props.unit.tests}
            onSubmit={props.onSubmit}
            btnSubmitLabel={props.locales.btnSubmitLabel}
          />
        </article>
        <aside>
          <header>List of units</header>
          <ul>
            <li>Html 5 Intro</li>
            <li>Html 5 Basic</li>
            <li>Html 5 Deep</li>
            <li>Html 5 Examples</li>
            <li>Html 5 Conclusion</li>
          </ul>
        </aside>
      </section>
    </DocumentTitle>
  );
}

const unitItem = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  info: PropTypes.string.isRequired,
  sections: PropTypes.array,
  tests: PropTypes.array.isRequired,
};

UnitPage.propTypes = {
  unit: PropTypes.shape(unitItem),
  onSubmit: PropTypes.func.isRequired,
  locales: PropTypes.object.isRequired,
};

export default UnitPage;

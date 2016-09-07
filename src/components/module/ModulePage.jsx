import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import UnitBox from './UnitBox';
import ProgressIndicator from './ModuleProgressIndicator';

function ModulePage(props) {
  const baseClass = 'module-page';
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
          <ProgressIndicator title={props.module.title} items={props.module.units} />
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
  sections: PropTypes.array.isRequired,
  tests: PropTypes.array.isRequired,
};

const moduleItem = {
  title: PropTypes.string.isRequired,
  units: PropTypes.arrayOf(unitItem),
};

ModulePage.propTypes = {
  unit: PropTypes.shape(unitItem),
  module: PropTypes.shape(moduleItem),
  onSubmit: PropTypes.func.isRequired,
  locales: PropTypes.object.isRequired,
  palette: PropTypes.object.isRequired,
};

export default ModulePage;

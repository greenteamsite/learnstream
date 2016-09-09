import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

function UnitTestContent(props) {
  const tests = [];
  if (props.tests) {
    props.tests.forEach((item, index) => {
      tests.push(
        <Card className="unit-section" initiallyExpanded key={index} style={{ margin: '0.5em', backgroundColor: '#333' }}>
          <CardHeader
            title={item.question.title}
            subtitle={item.question.subtitle}
          />
          <CardText className="unit-section-cardtext">
            <div className="sectionInfo">
              {item.question.info}
            </div>
          </CardText>
        </Card>
      );
    });
  }
  return (
    <div>
     {tests}
    </div>
  );
}

UnitTestContent.propTypes = {
  tests: PropTypes.array.isRequired,
};

export default UnitTestContent;

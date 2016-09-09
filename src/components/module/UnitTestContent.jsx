import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

function UnitTestContent(props) {
  const test = props.tests.find((item) => (
    item.answerId !== 0
  ));

  const answers = [];
  if (test.answers) {
    props.tests.forEach((item, index) => {
      answers.push(
        <Card className="unit-section" initiallyExpanded key={index} style={{ margin: '0.5em', backgroundColor: '#333' }}>
          <CardHeader
            title={item.title}
            subtitle={item.subtitle}
          />
          <CardText className="unit-section-cardtext">
            <div className="sectionInfo">
              {item.info}
            </div>
          </CardText>
        </Card>
      );
    });
  }
  return (
    <Card className="unit-section" initiallyExpanded style={{ margin: '0.5em', backgroundColor: '#333' }}>
      <CardHeader
        title={test.question.title}
        subtitle={test.question.subtitle}
      />
      <CardText className="unit-section-cardtext">
        <div className="sectionInfo">
          {test.question.info}
        </div>
      </CardText>
    </Card>
  );
}

UnitTestContent.propTypes = {
  tests: PropTypes.array.isRequired,
};

export default UnitTestContent;

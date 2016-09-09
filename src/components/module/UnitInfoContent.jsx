import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

function UnitInfoContent(props) {
  const sections = [];
  if (props.sections) {
    props.sections.forEach((item, index) => {
      sections.push(
        <Card className="unit-section" initiallyExpanded key={index} style={{ margin: '0.5em', backgroundColor: '#333' }}>
          <CardHeader
            title={item.title}
            subtitle={item.subtitle}
          />
          <CardText className="unit-section-cardtext">
            {
              item.pictureUrl ?
                <div className="sectionImg">
                  <img alt={item.title} src={item.pictureUrl} />
                </div>
                : null
            }
            <div className="sectionInfo">
              {item.info}
            </div>
          </CardText>
        </Card>
      );
    });
  }
  return (
    <div>
      {sections}
    </div>
  );
}

UnitInfoContent.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default UnitInfoContent;

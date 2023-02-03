import React from 'react';
import PropTypes from 'prop-types';

import { Section, Title, StatsList, StatsItem, Label, Percentage} from './Statistics-styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsList>
            {stats.map(({ id, label, percentage }) => {
                return (
                  <StatsItem key={id}>
                      <Label>{label}</Label>
                      <Percentage>{percentage}%</Percentage>
                  </StatsItem>
              );
            })}
      </StatsList>
    </Section>
  );
};


Statistics.protTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        }).isRequired
  ).isRequired,
}
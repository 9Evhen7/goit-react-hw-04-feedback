import PropTypes from 'prop-types';
import { Wraper } from '../styles/sectionStyles';

export const Section = ({ title, children }) => {
  return (
    <Wraper>
      <h2>{title}</h2>
      {children}
    </Wraper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

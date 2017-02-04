import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import types from '../../utils/types';
import styles from './Progress.css';


const Progress = ({ format, completed, minimum }) => {
  let fullWidth = 671;
  let cap = 13;
  if (format === 'short') {
    fullWidth = 428;
    cap = 4;
  }
  const pcnt = (completed > minimum) ? completed : minimum;
  const w = fullWidth - ((fullWidth - cap) * (pcnt / 100));
  return (
    <div>
      <div styleName="progress" className={`format-${format}`} >
        <div styleName="progress-frame" />
        <div styleName="progress-fill" />
        <div styleName="progress-bar" style={{ width: `${w}px` }} />
      </div>
    </div>
  );
};

Progress.defaultProps = {
  format: 'long',
  minimum: 0,
};

Progress.propTypes = {
  auth: types.auth,
  app: types.app,
  completed: PropTypes.number,
  minimum: PropTypes.number,
  format: PropTypes.string,
};

Progress.displayName = 'Progress';

export default CSSModules(Progress, styles);

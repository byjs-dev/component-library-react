import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ tag, label, variant,...props }) => {

  const style = '';

  if(tag === 'input'){
    return (<input value={label} {...props}/>);
  }
  if(tag === 'a'){
    return (<a {...props} >{label}</a>);
  }
  return (
      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} {...props}>
        {label}
      </button>
  );
};

Button.propTypes = {
  /**
   * The HTML Element to be rendered
   */
  tag: PropTypes.oneOf(['button', 'input', 'a']),
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Optional theme (overrides outer/global theme)
   */
  theme: PropTypes.oneOf(['cat', 'rental', 'zeppelin', 'neutral']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  tag: "button",
  variant: "primary",
  theme: undefined,
  label: 'Button',
  type: null,
  onClick: undefined,
};

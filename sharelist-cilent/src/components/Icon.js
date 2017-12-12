import React from 'react';
//const {PropTypes} = React;

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   size: PropTypes.number,
//   color: PropTypes.string,
// };

Icon.defaultProps = {
  size: 16,
};

export const objIcon=props =>{
  const defaultOptions={
    styles : {
      svg: 'display:inline-block,verticalAlign:middle',
      path:'fill:black'
    },
    size:'16px'
  }

  const options={...defaultOptions,...props}
  return  `<svg
              style="`+options.styles.svg+`"
              width="`+options.size+`"
              height="`+options.size+`"
              viewBox="0 0 1024 1024">
            <path
              style="`+options.styles.path+`"
              d="`+options.icon+`"
            >
            </path>
          </svg>`
  }

export default Icon;
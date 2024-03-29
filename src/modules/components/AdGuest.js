import * as React from 'react';
import PropTypes from 'prop-types';
import Portal from '@mui/material/Portal';
import { AdContext } from '@site/src/modules/components/AdManager';

export default function AdGuest(props) {
  const ad = React.useContext(AdContext);

  if (!ad.element) {
    return null;
  }

  return (
    <Portal
      container={() => {
        const description = document.querySelector('.description');

        if (ad.element === description) {
          description.classList.add('ad');
        } else {
          description.classList.remove('ad');
        }

        return ad.element;
      }}
    >
      {props.children}
    </Portal>
  );
}

AdGuest.propTypes = {
  children: PropTypes.node,
};

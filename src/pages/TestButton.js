/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import Button from '@mui/material/Button';
import useIsBrowser from '@docusaurus/useIsBrowser';
export default function BoundaryTestButton({
  children = 'Boom!',
  message,
  cause
  , handler = () => {
    alert('ok')
    throw new Error(message, {
      cause: cause ? new Error(cause) : undefined,
    });
  }


}) {
  const [state, setState] = React.useState(false);
  const IsBrowser = useIsBrowser()
  React.useEffect(() => {
    /*     throw new Error(message, {
          cause: cause ? new Error(cause) : undefined,
        }); */
    if (!IsBrowser || !state) {
      console.log('寂寞')
      return null
    }
    handler()
    setState(false)
  }, [state])
  return (
    <Button
      className="button button--danger"
      type="button"
      onClick={() => setState(true)}>
      {children}
    </Button>
  );
}



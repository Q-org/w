import React, { useState, useEffect, creatContext } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

import PubSub from 'pubsub-js'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';

import ModeSwitcher from '../components/MuiTheme';

// 默认实现，你可以自定义

export default function R({ children }) {

    const ref = React.createRef();
    if (!useIsBrowser()) {
    }
    return (

        <CssVarsProvider >
            <ModeSwitcher />
            {children}

        </CssVarsProvider>
    )

}
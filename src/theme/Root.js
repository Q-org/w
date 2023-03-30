import React, { useState, useEffect, creatContext } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

import PubSub from 'pubsub-js'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';

import ModeSwitcher from '../components/MuiTheme';

import { CookieConsentProvider } from '@use-cookie-consent/react'
// 默认实现，你可以自定义

const CookieBanner = () => {
    /*     const { acceptAllCookies, declineAllCookies, acceptCookies } =
            CookieConsentProvider.useCookieConsentContext(); */

    return (
        <div>
            <button onClick={'acceptAllCookies'}>Accept all</button>
            <button onClick={() => 'acceptCookies({ thirdParty: true })'}>
                Accept third-party
            </button>
            <button onClick={() => 'acceptCookies({ firstParty: true })'}>
                Accept first-party
            </button>
            <button onClick={'declineAllCookies'}>Reject all</button>
        </div>
    );
};
export default function R({ children }) {

    const ref = React.createRef();
    if (!useIsBrowser()) { }
    return (
        <CookieConsentProvider>
            <CssVarsProvider >
                <ModeSwitcher />
                {children}

            </CssVarsProvider>
        </CookieConsentProvider>
    )

}
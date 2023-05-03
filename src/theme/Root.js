import * as React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import PubSub from 'pubsub-js'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';
import { getToken } from "next-auth/jwt"
import ModeSwitcher from '../components/MuiTheme';


//import {  } from "js-cookie";


import { CookieConsentProvider, createCookieConsentContext, useCookieConsent } from '@use-cookie-consent/react'
// 默认实现，你可以自定义
import { GPRMProvider } from "../components/mobx/GPRMcontext";
import { ControlCameraSharp } from '@mui/icons-material';
//import useIsBrowser from '@docusaurus/useIsBrowser';

const getItem = key =>
    document.cookie.split("; ").reduce((total, currentCookie) => {
        const item = currentCookie.split("=");
        const storedKey = item[0];
        const storedValue = item[1];
        return key === storedKey
            ? decodeURIComponent(storedValue)
            : total;
    }, '');



const CookieBanner = x => {

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
    React.useEffect(async x => {

        log('')
        await fetchCookie()

        console.log(getItem('qio.csrf-token'))

    }, [])

    return (<>

        <CookieConsentProvider >
            <CssVarsProvider >
                <ModeSwitcher />
                <GPRMProvider>
                    {/*                     <CookieBanner /> */}
                    {children}
                </GPRMProvider>
            </CssVarsProvider>
        </CookieConsentProvider>

    </>)

}

const fetchCookie = x => {
    fetch("/api/auth/session", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "content-type": "application/json",
            "if-none-match": "\"bwc9mymkdm2\"",

        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    })
        .then(x => {

            return getItem('USE_COOKIE_CONSENT_STATE')
        })
};
const log = x => {
    if (typeof window !== 'undefined' /* && process.env.NODE_ENV === 'production' */) {
        // eslint-disable-next-line no-console
        console.log(
            `%c
  
  ███╗   ███╗ ██╗   ██╗ ██████╗
  ████╗ ████║ ██║   ██║   ██╔═╝
  ██╔████╔██║ ██║   ██║   ██║
  ██║╚██╔╝██║ ██║   ██║   ██║
  ██║ ╚═╝ ██║ ╚██████╔╝ ██████╗
  ╚═╝     ╚═╝  ╚═════╝  ╚═════╝
  
  Tip: you can access the documentation \`theme\` object directly in the console.
  `, 'font-family:monospace;color:#1976d2;font-size:11px;',
        );
    }
}
import * as React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';
import ModeSwitcher from '../components/MuiTheme';
import Logo from '@theme/Logo';
import NavbarLogo from '@theme/Navbar/Logo';
// import { CookieConsentProvider, createCookieConsentContext, useCookieConsent } from '@use-cookie-consent/react'
// 默认实现，你可以自定义
import { GPRMProvider } from "../components/mobx/GPRMcontext";
// Variant = 'LOGIN' | 'REGISTER';
export default function R({ children }) {
    const [variant, setVariant] = React.useState('LOGIN');
    const [isLoading, setIsLoading] = React.useState(false);
    const ref = React.createRef();
    if (!useIsBrowser()) { }
    React.useEffect(async x => {

        log('')
        let session = await fetchCookie()
        if (!session) return null

        console.log('{', session, '}')

    }, [])
    return (<>

        <CssVarsProvider >

            <ModeSwitcher />
            <GPRMProvider>
                {/*                     <CookieBanner /> */}

                {children}
            </GPRMProvider>
        </CssVarsProvider>
    </>)

}

export const fetchCookie = async x => {
    let res = await fetch('/api/auth/session');
    return await res.json();
};


const log = x => {
    if (typeof window !== 'undefined') {
        console.log(`%c
  
        ██╗          ██╗	██████╗	██████╗
        ██║	██╗	██║	██╔═══╝		██╔═╝	
        ██╚████╗██║	█████╗		██║		
        ████╔═████║	██╔══╝		██║		
        ███╔╝    ███║  ██████╗	██████╗	
         ╚═╝         ╚═╝	╚═════╝	╚═════╝	 
      
        Tip: you can access the documentation \`theme\` object directly in the console.
        `, 'font-family:monospace;color:#1976d2;font-size:12px;');
    }
}
import React, { useState, useEffect } from 'react';
import Button from '@mui/lab/LoadingButton';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';
import PubSub from 'pubsub-js'
// ModeSwitcher is an example interface for toggling between modes.
// Material UI does not provide the toggle interface—you have to build it yourself.
export const ModeSwitcher = (props) => {

    const { mode, setMode } = useColorScheme(props);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        PubSub.subscribe('变更了', (msg, data) => {
            setMode(data)
        });
    }, [])


    if (!mounted) {
        // for server-side rendering
        // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
        return null;
    }
    return ''
    return (



        <Button
            variant="outlined"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>

    )

};

export default function MuiTheme(props) {

    return (
        <CssVarsProvider>
            <ModeSwitcher />
        </CssVarsProvider>
    );
}

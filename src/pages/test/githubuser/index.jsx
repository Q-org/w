import React from 'react'
import Layout from '@theme/Layout';
import List from '@site/src/components/List'
import Search from '@site/src/components/Search'
import Button from '@mui/lab/LoadingButton';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';

// ModeSwitcher is an example interface for toggling between modes.
// Material UI does not provide the toggle interface—you have to build it yourself.
const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {

        setMounted(true);
    }, []);

    if (!mounted) {
        // for server-side rendering
        // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
        return null;
    }

    return (
        <Button
            variant="outlined"
            onClick={() => {
                // console.log('修改了')
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
    );
};

export default function index() {
    return (
        <Layout title="用户" description="Hello React Page">
            <ModeSwitcher />
           <Search id='gihubuser' />
            <List />

        </Layout>
    )

}


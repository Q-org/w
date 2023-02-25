import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';

export default function LoadingButtonsTransition(t) {
    const [loading, setLoading] = React.useState(false);
    const [text, setText] = React.useState('Sendaa');

    function handleClick() {
        setLoading(true);
    }
    return (
        <Box>
            <LoadingButton
                size="small"
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                {text}
            </LoadingButton>

        </Box>
    );
}

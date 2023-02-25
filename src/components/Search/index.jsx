import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PubSub from 'pubsub-js'

import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';

import ff from "@site/src/action/FETCH";

export default class Search extends Component {
    state = {
        loading: true,
    }

    search = async () => {

        const { keyKey: { value } } = this
ff()
        this.setState({ loading: true })
        //console.log('修改', this.state)
        if (!value) return

        let url = `https://api.github.com/search/users?q=${value}`
        const res = await fetch(url)
        let data = await res.json()

       // console.log(data)
        PubSub.publish('MY TOPIC', data);
    }

    render() {
        const { loading } = this.state
        console.log(loading, 'loading')
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <Stack spacing={2} direction="row">
                    <input ref={c => this.keyKey = c} id="outlined-basic" label="请输入" variant="outlined" defaultValue='atguigu' />

                    <LoadingButton
                        size="small"
                        onClick={this.search}
                        endIcon={<SearchIcon />}
                        loading={this.loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        搜索
                    </LoadingButton>
                </Stack>

            </Box >
        );
    }
}

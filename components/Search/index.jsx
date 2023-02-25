import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PubSub from 'pubsub-js'

import LoadingButton from '@mui/lab/LoadingButton';


import SearchIcon from '@mui/icons-material/Search';
import Send from '@mui/icons-material/Send';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

const icons = {
    SportsKabaddiIcon: <SportsKabaddiIcon />,
    SearchIcon: <SearchIcon />,
    Send: <Send />,

}

export class Searchnew extends Component {
    state = {
        loading: true,
        icon: 'Send',
        blabel: "发送",
        defaultValue: 'atguigu',
        ...this.props
    }

    search = async () => {

        const { keyKey: { value } } = this

        this.setState({ loading: true })
        console.log('this.state', this.state)
        if (!value) return

        let url = `https://api.github.com/search/users?q=${value}`
        const res = await fetch(url)
        let data = await res.json()
        console.log(data)
        PubSub.publish('MY TOPIC', data);
    }

    render() {

        console.log('props', this.props, 'states', this.state)
        const { loading } = this.state

        const { icon, defaultValue, blabel } = this.state
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
                    <input ref={c => this.keyKey = c} id="outlined-basic" label="请输入" variant="outlined" defaultValue={defaultValue} />

                    <LoadingButton
                        size="small"
                        onClick={this.search}
                        endIcon={icons[icon]}
                        loading={this.loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        {blabel}
                    </LoadingButton>
                </Stack>

            </Box >
        );
    }
}



export default class Search extends Component {
    state = {
        loading: true,
        icon: 'Send',
        blabel: "发送",
        defaultValue: 'atguigu'
    }

    search = async () => {

        const { keyKey: { value } } = this

        this.setState({ loading: true })
        console.log('this.state', this.state)
        if (!value) return

        let url = `https://api.github.com/search/users?q=${value}`
        const res = await fetch(url)
        let data = await res.json()
        console.log(data)
        PubSub.publish('MY TOPIC', data);
    }

    render() {

        console.log('props', this.props, 'states', this.state)
        const { loading } = this.state

        const { icon, defaultValue, blabel } = this.state
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
                    <input ref={c => this.keyKey = c} id="outlined-basic" label="请输入" variant="outlined" defaultValue={defaultValue} />

                    <LoadingButton
                        size="small"
                        onClick={this.search}
                        endIcon={icons[icon]}
                        loading={this.loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        {blabel}
                    </LoadingButton>
                </Stack>

            </Box >
        );
    }
}

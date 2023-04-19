import React, { useState, useEffect } from 'react';
import FETCH, { post } from "@site/src/action/FETCH";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@docusaurus/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Translate from '@docusaurus/Translate';
import { GoogleLogin } from 'react-google-login';


import { Email, Password, LastName, FirstName, UserId, Copyright } from './fileds';
const responseGoogle = (response) => {
  console.log(response);
}


const googleLogin = () => {
  return (
    <>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}


const theme = createTheme();

function SignIn() {

  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    data.append('action', "登陆2")

    const [res, param] = await FETCH(data);



    if (!res.ok) {
      console.log('登陆失败', res)

      setError(true)
      setMessage(httpeception[res.status]())
      return null

    }
    console.log('___', res.json())
    return null
    let token = await res.json()





    //console.log('______99999____', token)
    sessionStorage.setItem('oldtoken', sessionStorage.getItem('access_token'))
    Object.keys(token).map(k => sessionStorage.setItem(k, token[k]))


    //let data0 = await ress.json()
    console.log(param)
    post('/jc/login.action', param)

  };

  const inputChange = (e) => {
    if (error || message !== null) {
      setError(false)
      setMessage(null)
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <Translate>登 陆</Translate>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <UserId
              error={error}
              helperText={message}
              onChange={inputChange}
            />
            <Password
              error={error}
              helperText={""}
              onChange={inputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="记住我"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              登 陆
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" underline="hover">
                  忘记 密码?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Sign/SignUp" underline="hover">
                  "没有账户? 注 册"
                </Link>
              </Grid>
            </Grid>
          </Box>

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider >
  );
}


function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            注 册
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FirstName />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LastName />
              </Grid>
              <Grid item xs={12}>
                <Email />
              </Grid>
              <Grid item xs={12}>
                <Password />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="我想通过电子邮件接收灵感、营销促销和更新。"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              注 册
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Sign/SignIn" underline="hover">
                  已经有帐户? 登 入
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

const httpeception = {
  404: () => {
    return "用户名 或 密码错误"
  },
  500: () => {
    return "内部错误"
  },
}


export {
  SignIn, SignUp
}

import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
  console.log(response);
}
const facebookLogin = () => {
  return (<>
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />,
    document.getElementById('demo')
  </>)
}


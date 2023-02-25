import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
/* import { useFormik } from 'formik'

export const formik = useFormik({
    initialValues: {
        email: '',
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
});
 */
export const Email = () => {

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="用户名/邮件/手机"
      name="email"
      autoComplete="email"
      autoFocus
    />
  )
}
export function UserId(props) {
  const { error, setError } = useState(true)

  return (
    <TextField
      {...props}
      // error={props.error}
      // helperText={props.helperText}
      // onChange={props.onChange}
      margin="normal"
      required
      fullWidth
      id="userId"
      label="用户名/邮件/手机"
      name="userId"
      autoComplete="userId"
      autoFocus

    />
  )

}

export const Password = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <TextField
      {...props}
      // error={props.error}
      // helperText={props.helperText}
      // onChange={props.onChange}
      margin="normal"
      required
      fullWidth
      name="password"
      label="密 码"

      id="password"
      autoComplete="current-password"
      type={showPassword ? 'text' : 'password'}


    />

  )

}
export const FirstName = (props) => {
  return (
    <TextField
      autoComplete="given-name"
      name="firstName"
      required
      fullWidth
      id="firstName"
      label="名"
      autoFocus
    />
  )
}
export const LastName = (props) => {
  return (
    <TextField
      autoComplete="given-name"
      name="lastName"
      required
      fullWidth
      id="lastName"
      label="姓"
      autoFocus
    />
  )
}
export const Input = (props) => {
  let { autoComplete, name, required, id, fullWidth, label, autoFocus, color } = props
  return (
    <TextField
      color={color}
      autoComplete={autoComplete}
      name={name}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      autoFocus={autoFocus}
    />
  )
}


export function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

export function from1() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="jlsdjsl"
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
  );
}


export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'版权 © '}
      <Link color="inherit" href="https://github.com/Q-org">
        Q-org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

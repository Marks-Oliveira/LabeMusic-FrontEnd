import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants";
import { useHistory } from "react-router";

import { 
  Avatar,
  Button,
  Link, 
  Grid, 
  TextField, 
  Typography, 
  Container 
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {

  const [emailOrNickname, setEmailOrNickname] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUpdateEmail = (event) => {
    const newEmailOrNickname = event.target.value;
    setEmailOrNickname(newEmailOrNickname);
  }

  const handleUpdatePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    const body = {
      emailOrNickname: emailOrNickname,
      password: password
    };

    try {
      const response = await axios.post(`${baseUrl}/user/login`, body);
  
      localStorage.setItem("accessToken", response.data.accessToken);
      history.replace("/musics");
      
    } catch (error) {
      alert("Login falhou :(");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email ou Nickname"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            value={emailOrNickname}
            onChange={handleUpdateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleUpdatePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não possui conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );

}

export default Login;
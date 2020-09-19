import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../constants";
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { LinkToLogin } from "./styles";

const Signup = () => {
  const [userName, setUserName] = useState("");  
  const [userNickname, setUserNickname] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();  

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      history.replace("/musics");
    }
  }, [])

  const handleGoToLogin = () => {
    history.push("/login");
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const body = {
      name: userName,
      nickname: userNickname,
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${baseUrl}/user/signup`, body);
  
      localStorage.setItem("accessToken", response.data.accessToken);
      history.replace("/musics");
      
    } catch (error) {
      alert("Cadastro falhou :(");
    }
  };

  const inputProps = {
    pattern:"^[A-Za-z0-9@#%&*]{6,}"
  }; 

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            type="text"
            autoComplete="name"
            autoFocus
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nickname"
            label="Nickname"
            name="nickname"
            type="text"
            autoComplete="nickname"
            value={userNickname}
            onChange={e => setUserNickname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            inputProps={inputProps}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <LinkToLogin>
                <Link onClick={handleGoToLogin} variant="body2">
                  {"Já possui conta? Logue-se"}
                </Link>
              </LinkToLogin>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );

};

export default Signup;
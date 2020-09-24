import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants";
import { useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { 
  LinkToMusics, 
  MusicRegisterContainer, 
  CheckboxContainer, 
  MusicRegisterWrapper,
  Title 
} from "./styles";

const MusicRegister = () => {
  const [musicTitle, setMusicTitle] = useState("");
  const [musicAuthor, setMusicAuthor] = useState("");
  const [musicDate, setMusicDate] = useState("");
  const [musicFile, setMusicFile] = useState("");
  const [musicAlbum, setMusicAlbum] = useState("");
  const [musicGenres, setMusicGenres] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      history.replace("/login");
    }
  }, [])

  const handleGoToMusics = () => {
    history.push("/musics");
  };

  const checkboxGenres = [
    "Axé", "Blues", "Country", "Eletrônica", "Forró", 
    "Funk", "Gospel", "Hip Hop", "Jazz", "MPB", 
    "Música clássica", "Pagode", "Pop", "Rap", 
    "Reggae", "Rock", "Samba", "Sertanejo"
  ];

  const getValue = (event) => {
    let data = musicGenres;
    if (event.target.checked) {
      data.push(event.target.value);
      setMusicGenres(data);
    } else {
      data.splice(data.indexOf(event.target.value));
      setMusicGenres(data);
    }
  };

  const handleMusicRegister = async (event) => {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        authorization: localStorage.getItem("accessToken")
      }
    }

    const formattedDate = moment(musicDate, "YYYY-MM-DD").format("DD/MM/YYYY");
    const body = {
      title: musicTitle,
      author: musicAuthor,
      date: formattedDate,
      file: musicFile,
      album: musicAlbum,
      genre: musicGenres
    };

    try {

      await axios.post(`${baseUrl}/music`, body, axiosConfig);
      
      alert("Música cadastrada com sucesso!!!")
    } catch (error) {
      alert("Cadastro falhou :(");
    }
  };

  return (
    <MusicRegisterWrapper>
      <MusicRegisterContainer>
        <Container component="main" maxWidth="xs">
          <div>
            <Title>
              <Typography component="h1" variant="h5">
                Cadastrar Música
              </Typography>
            </Title>
            <form onSubmit={handleMusicRegister}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Título"
                name="title"
                type="text"
                size="small"
                autoComplete="title"
                autoFocus
                value={musicTitle}
                onChange={e => setMusicTitle(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="author"
                label="Autor"
                name="author"
                type="text"
                size="small"
                autoComplete="author"
                value={musicAuthor}
                onChange={e => setMusicAuthor(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="date"
                label="Data"
                name="date"
                type="date"
                size="small"
                autoComplete="date"
                InputLabelProps={{ shrink: true }}
                value={musicDate}
                onChange={e => setMusicDate(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="file"
                label="Arquivo para download"
                type="text"
                size="small"
                id="file"
                autoComplete="file"
                value={musicFile}
                onChange={e => setMusicFile(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="album"
                label="Album"
                type="text"
                id="album"
                size="small"
                autoComplete="album"
                value={musicAlbum}
                onChange={e => setMusicAlbum(e.target.value)}
              />
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Gênero</FormLabel>
                <FormGroup>
                  <CheckboxContainer>
                    {checkboxGenres.map((genre) => {
                      return <FormControlLabel key={genre}
                                control={<Checkbox 
                                          color="primary"
                                          value={genre} 
                                          onChange={(e) => getValue(e)} 
                                          />}
                                label={genre}
                              />
                    })}
                  </CheckboxContainer>
                </FormGroup>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Cadastrar
              </Button>
              <Grid container>
                <Grid item>
                  <LinkToMusics>
                    <Link onClick={handleGoToMusics} variant="body1">
                      {"Ir para página de Músicas"}
                    </Link>
                  </LinkToMusics>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </MusicRegisterContainer>
    </MusicRegisterWrapper>
  );

};

export default MusicRegister;
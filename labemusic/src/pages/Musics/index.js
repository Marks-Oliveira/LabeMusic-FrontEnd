import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { baseUrl } from "../../constants";

import { WaveTopBottomLoading } from 'react-loadingg';
import { ButtonContainer, MusicCardContainer, MusicContainer, MusicWrapper } from "./styles";
import MusicCardInfo from "../../components/MusicCard/MusicCardInfo";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Musics = () => {
  const history = useHistory();
  const [musics, setMusics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      history.replace("/login")
    }
  }, []);

  useEffect(() => {
    const axiosConfig = {
      headers: {
        authorization: localStorage.getItem("accessToken")
      }
    }

    setIsLoading(true);
    axios.get(`${baseUrl}/music`, axiosConfig)
         .then((response) => {
           setMusics(response.data.musics);
           setIsLoading(false);
         })
  }, []);

  const handleGoToMusicRegister = () => {
    history.push("/music/register");
  }

  return (
    <MusicWrapper>
      <ButtonContainer>
        <Button 
          onClick={handleGoToMusicRegister} 
          variant="contained" 
          size="large" 
          color="secondary"
        >
          Cadastrar música
        </Button>
      </ButtonContainer>
      <MusicContainer>
        <div>
          <Typography component="h1" variant="h5">
            Suas músicas cadastradas
          </Typography>
        </div>
        <MusicCardContainer>
        {isLoading ? <WaveTopBottomLoading /> : null}
        {musics.map((music) => {
          return ( <MusicCardInfo 
                      key={music.id} 
                      music={music} 
                    />
                  )
        })}
        </MusicCardContainer>
      </MusicContainer>
    </MusicWrapper>
  );

};

export default Musics;
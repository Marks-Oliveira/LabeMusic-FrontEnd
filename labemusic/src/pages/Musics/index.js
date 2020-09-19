import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { baseUrl } from "../../constants";

import { LoopCircleLoading } from 'react-loadingg';
import { MusicWrapper } from "./styles";
import MusicCardInfo from "../../components/MusicCard/MusicCardInfo";

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

  return (
    <MusicWrapper>
      {isLoading ? <LoopCircleLoading /> : null}
      {musics.map((music) => {
        return ( <MusicCardInfo 
                    key={music.id} 
                    music={music} 
                  />
                )
      })}
    </MusicWrapper>
  );

};

export default Musics;
import React, { useState } from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import musica from "../../images/musica.jpg";
import MusicCardFullInfo from "./MusicCardFullInfo";
import { Image, MusicCardInfoWrapper } from "./styles";

const MusicCardInfo = (props) => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <MusicCardInfoWrapper>
      <Card onClick={() => setIsModalVisible(true)}>
        <CardActionArea>
          <Image src={musica} alt="Música" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.music.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.music.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {isModalVisible ? <MusicCardFullInfo 
                          music={props.music} 
                          onClose={() => setIsModalVisible(false)} 
                        /> 
                        : null }
    </MusicCardInfoWrapper>
  );

};

export default MusicCardInfo;
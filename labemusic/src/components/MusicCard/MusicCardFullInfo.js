import React from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import musica from "../../images/musica.jpg";
import { ImageModal } from "./styles";
import { ModalWrapper } from "./styles";
import { Container } from "./styles";
import { CloseButton } from "./styles";

const MusicCardFullInfo = ({music, onClose}) => {
  
  const handleOutsideClick = (event) => {
    if (event.target.id === music.id) {
      onClose();
    }
  };

  return (
    <ModalWrapper id={music.id} onClick={handleOutsideClick}>
      <Container>
        <Card>
          <CardActionArea>
            <ImageModal src={musica} alt="Música" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {music.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="h1">
                {"Data: " + music.date}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="h1">
                {"Gênero: " + music.genres}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="h1">
                {"Album: " + music.album}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CloseButton>
            <Button 
                variant="contained" 
                color="secondary" 
                size="small"
                onClick={onClose}
            > 
              X 
            </Button>
          </CloseButton>
        </Card>
      </Container>
    </ModalWrapper>
  );

};

export default MusicCardFullInfo;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Result() {
  const { score, maximumScore } = useSelector((state) => state.narutoQuizeRuduser);
  return (
         <Card sx={{ maxWidth: '700px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
          image="https://gamemag.ru/images/cache/News/News153279/b2c8e4968a-2_1390x600.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Congratulations  your score is {score} / {maximumScore}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

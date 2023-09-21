import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoModal from '../modal/Modals';

export default function QuizeCard({ quizes, handleNavigate }) {
  const [isShowModal, setShowModal] = useState(false);
  const quizeDescription = quizes.description.substring(0, 100);
  const { title } = quizes;

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Card sx={{ width: 300, maxWidth: 345, margin: '20px' }} key={quizes.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={quizes.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quizes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${quizeDescription}....`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleShowModal} size="lg">More</Button>
        <Button onClick={() => { handleNavigate(title); }} size="lg">Start</Button>
      </CardActions>
      {isShowModal && (
        <InfoModal content={quizes} onClose={handleCloseModal} />
      )}
    </Card>
  );
}

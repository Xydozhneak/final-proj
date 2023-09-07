import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoModal from '../modal/Modals';

export default function QuizeCard({ quizes }) {
<<<<<<< HEAD
  const quizeDescription = quizes.description.substring(0, 100);
  const [isShowModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }
=======
  const [isShowModal, setShowModal] = useState(false);
  const quizeDescription = quizes.description.substring(0, 100);

  const handleShowModal = () => {
    setShowModal(true);
  }

>>>>>>> 451750f0d1c65e828734bd9219361589e01bf5a0
  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
<<<<<<< HEAD
    <Card sx={{ width: 300, maxWidth: 345, margin: '20px',}}  key={quizes.id}>
=======
    <Card sx={{ width: 300, maxWidth: 345, margin: '20px' }} key={quizes.id}>
>>>>>>> 451750f0d1c65e828734bd9219361589e01bf5a0
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
<<<<<<< HEAD
        <Button onClick={handleOpenModal}  size="lg"> More </Button>
=======
        <Button onClick={handleShowModal} size="lg">More</Button>
>>>>>>> 451750f0d1c65e828734bd9219361589e01bf5a0
        <Button onClick={() => { alert('Quize Started') }} size="lg">Start</Button>
      </CardActions>
      {isShowModal && (
        <InfoModal content={quizes} onClose={handleCloseModal} />
      )}
<<<<<<< HEAD

=======
>>>>>>> 451750f0d1c65e828734bd9219361589e01bf5a0
    </Card>
  );
}

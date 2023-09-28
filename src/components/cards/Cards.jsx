import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, Select } from '@mui/material';
import InfoModal from '../modal/Modals';
import actions from '../../store/services/quizesCard/actions';

export default function QuizeCard({ quizes, handleNavigate }) {
  const [isShowModal, setShowModal] = useState(false);
  const quizeDescription = quizes.description.substring(0, 100);
  const { lvlType } = useSelector((state) => state.quizCardReducer);
  const { title } = quizes;
  const dispatch = useDispatch();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    dispatch(actions.changeDificultAction(e.target.value));
    console.log(e.target.value);
  };

  return (
    <Card sx={{
      width: 300, maxHeight: '500px', maxWidth: 345, margin: '20px',
    }} key={quizes.id}>
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
      <InputLabel id="demo-simple-select-label">Select Dificult</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={lvlType}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Hard</MenuItem>
    <MenuItem value={20}>Middle</MenuItem>
    <MenuItem value={30}>Easy</MenuItem>
  </Select>
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

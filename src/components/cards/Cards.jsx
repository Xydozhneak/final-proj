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
import FavoriteCheck from '../CastomCheckbox/Favourite';
import { quizes } from '../../api/quizes/quizes';

export default function QuizeCard({ quiz, handleNavigate }) {
  const [isShowModal, setShowModal] = useState(false);
  const quizeDescription = quiz.description.substring(0, 100);
  const checked = quiz.favourite;
  const [isFavourite, setIsFavourite] = useState(checked);
  const { lvlType } = useSelector((state) => state.quizCardReducer);
  const { title } = quiz;
  const dispatch = useDispatch();

  const hadleFavourite = async (e) => {
    const newIsFavourite = e.target.checked;
    setIsFavourite(newIsFavourite);
    console.log(newIsFavourite);
    try {
      await quizes.putFavourite(quiz.id, newIsFavourite);
    } catch {
      console.error('Error');
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    dispatch(actions.changeDificultAction(e.target.value));
  };

  return (
    <Card sx={{
      width: 300, maxHeight: '500px', maxWidth: 345, margin: '20px',
    }} key={quizes.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={quiz.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quiz.title}
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
        <FavoriteCheck checked = {isFavourite} onChange ={hadleFavourite}/>
        <Button onClick={handleShowModal} size="lg">More</Button>
        <Button onClick={() => { handleNavigate(title); }} size="lg">Start</Button>
      </CardActions>
      {isShowModal && (
        <InfoModal content={quizes} onClose={handleCloseModal} />
      )}
    </Card>
  );
}

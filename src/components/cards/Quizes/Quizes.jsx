import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CardStyle, controlStyle } from './quizesStyle';

export default function Quizes({
  data, onNext, onPrev, index, onAnswer,
}) {
  const { questions, answers } = data;
  const [firstQuestion] = questions;
  const { question, answer } = firstQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
  };

  const isCorrect = selectedAnswer === answer;

  const handleNextClick = () => {
    onAnswer(isCorrect ? 10 : 0);
    setSelectedAnswer(null);
    onNext();
  };
  return (
    <Card sx={CardStyle}>
      <CardMedia
        component="img"
        alt="alt_pick"
        height="340"
        image={data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {question}
        </Typography>
        {answers.map((answer) => (
          <FormControlLabel
            labelPlacement="end"
            style={controlStyle}
            key={answer.id}
            value={answer.answer}
            control={<Radio onClick={() => handleAnswerClick(answer.id)}
            checked={selectedAnswer === answer.id}
            name="name-group" />}
            label={answer.answer}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button onClick={onPrev} size="small" disabled={index === 0}>
          Prev
        </Button>
        <Button onClick={handleNextClick} size="small">
          Next
        </Button>
      </CardActions>
    </Card>
  );
}

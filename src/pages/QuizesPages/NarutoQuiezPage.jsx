import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { quizesNaruto } from '../../api/quizes/quizes';
import Quizes from '../../components/cards/Quizes/Quizes';
import Loader from '../../components/Loader';
import Result from '../../components/cards/Result';
import { narutoQuizesStyle } from './StyleNarutoQuiezes';

export default function NarutoQuizesPage() {
  const { quize } = useParams();
  const [quizeList, setQuizeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (points) => {
    setScore(score + points);
  };

  const fetchQuizeList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await quizesNaruto.get();
      setQuizeList(response);
      setMaximumScore(response.length * 10);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [quize]);

  useEffect(() => {
    fetchQuizeList();
  }, [fetchQuizeList]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!quizCompleted && timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, quizCompleted]);

  const handleNext = () => {
    if (index + 1 >= quizeList.length) {
      setQuizCompleted(true);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    setIndex(index - 1);
    setScore(score - 10);
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const data = quizeList[index];
  return (
    <Container style={narutoQuizesStyle} maxWidth="lg">
      <div>
        {quizCompleted || timer <= 0 ? (
          <Result score={score} maximumScore={maximumScore} />
        ) : (
          <div>Time Left {timer} seconds
          <Quizes data={data} index={index} onNext={handleNext} onPrev={handlePrev} onAnswer={handleAnswer} />
          </div>
        )}
      </div>
    </Container>
  );
}

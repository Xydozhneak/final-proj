import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Quizes from '../../components/cards/Quizes/Quizes';
import Loader from '../../components/Loader';
import Result from '../../components/cards/Result';
import { narutoQuizesStyle } from './StyleNarutoQuiezes';
import thunks from '../../store/services/quizes/thunks';
import actions from '../../store/services/quizes/actions';
import NotFound from '../../components/NotFound/NotFound';

export default function NarutoQuizesPage() {
  const { quize } = useParams();
  const { quizeList, index, score } = useSelector((state) => state.narutoQuizeRuduser);
  const { lvlType } = useSelector((state) => state.quizCardReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(lvlType);
  const fetchQuizeList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await dispatch(thunks.fetchNarutoQuize(quize));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, quize]);

  useEffect(() => {
    dispatch(actions.resetScoreAction(0));
    fetchQuizeList();
  }, [fetchQuizeList, quize, dispatch]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!quizCompleted && timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, quizCompleted]);

  const handleNext = () => {
    dispatch(actions.setMaximumScoreAction(quizeList.length * 10));
    if (index + 1 >= quizeList.length) {
      setQuizCompleted(true);
    } else {
      dispatch(actions.incIndexAction());
    }
  };

  const handlePrev = () => {
    dispatch(actions.decIndexAction());
    if (score <= 0) {
      dispatch(actions.resetScoreAction(0));
    } else {
      dispatch(actions.devScoreAction());
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  const data = quizeList[index];
  if (!data) {
    return (
      <NotFound />
    );
  }
  return (
    <Container style={narutoQuizesStyle} maxWidth="lg">
      <div>
        {quizCompleted || timer <= 0 ? (
          <Result />
        ) : (
          <div>Time Left {timer} seconds
            <Quizes data={data} index={index} onNext={handleNext} onPrev={handlePrev} />
          </div>
        )}
      </div>
    </Container>
  );
}

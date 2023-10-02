import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import Container from '@mui/material/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuizeCard from './cards/Cards';
import Loader from './Loader';
import thunks from '../store/services/quizesCard/thunks';
import actions from '../store/services/quizes/actions';

export default function ContainerQuize() {
  const navigate = useNavigate();
  const {
    quizes, filtredCard, filter, favouriteList,
  } = useSelector((state) => state.quizCardReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  const isFavouritePage = location.pathname.includes('/narutoQuizes/favourite');

  const quizeList = useMemo(() => {
    if (isFavouritePage) {
      return favouriteList;
    }
    return filter ? filtredCard : quizes;
  }, [quizes, filtredCard, filter, favouriteList, isFavouritePage]);

  const fetchQuizeList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await dispatch(thunks.fetchQuize());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, setError, setLoading]);

  useEffect(() => {
    fetchQuizeList();
  }, [fetchQuizeList]);
  const handleNavigate = (title) => {
    const params = title.toLowerCase().replaceAll(' ', '_');
    navigate(`/narutoQuizes/${params}`);
    dispatch(actions.resetIndexAction(0));
  };
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh' }} maxWidth="lg">
      {quizeList.map((quizes) => (
        <QuizeCard key={quizes.id} quiz={quizes} handleNavigate={handleNavigate}/>
      ))}
    </Container>
  );
}

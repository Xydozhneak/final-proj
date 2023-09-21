import React, { useCallback, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import QuizeCard from './cards/Cards';
import { quizes } from '../api/quizes/quizes';
import Loader from './Loader';

export default function ContainerQuize() {
  const navigate = useNavigate();
  const [quizeList, setQuizeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuizeList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await quizes.get();
      setQuizeList(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setQuizeList, setError, setLoading]);

  useEffect(() => {
    fetchQuizeList();
  }, [fetchQuizeList]);

  const handleNavigate = (title) => {
    const params = title.toLowerCase().replaceAll(' ', '_');
    navigate(`/narutoQuizes/quizes/${params}`);
  };
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap' }} maxWidth="lg">
      {quizeList.map((quizes) => (
        <QuizeCard key={quizes.id} quizes={quizes} handleNavigate={handleNavigate}/>
      ))}
    </Container>
  );
}

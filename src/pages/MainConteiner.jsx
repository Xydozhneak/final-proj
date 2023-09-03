import React, { useCallback, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import QuizeCard from '../components/cards/Cards';
import { quizes } from '../api/quizes/quizes';
import Loader from '../components/Loader';

export default function MainContainer() {
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ display: "flex", flexWrap: "wrap" }} maxWidth="lg">
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {quizeList.map((quizes) => (
          <QuizeCard key={quizes.id} quizes={quizes} />
        ))}
      </Container>
    </React.Fragment>
  );
}
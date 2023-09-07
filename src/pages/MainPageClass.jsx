import React, { Component } from "react";
import { quizes } from "../api/quizes/quizes";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Loader from '../components/Loader';
import CardsClass from '../components/cards/CardsClass';

export default class MainPageClass extends Component {
  state = {
    quizeList: [],
    loading: true,
  };

  render() {
    const { quizeList, loading } = this.state;

    if (loading) return <Loader />;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container style={{ display: "flex", flexWrap: "wrap" }} maxWidth="lg">
          {quizeList.map((quizes) => (
            <CardsClass key={quizes.id} quizes={quizes} />
          ))}
        </Container>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    quizes
      .get()
      .then((response) => {
        this.setState({ quizeList: response, loading: false });
      });
  }
}

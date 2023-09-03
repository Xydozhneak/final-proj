import React from 'react';
import { LoaderContainer, Spinner } from './loaderStyle';


export function Loader() {

  return (
<LoaderContainer>
    <Spinner></Spinner>
</LoaderContainer>
  );
}

export default Loader;

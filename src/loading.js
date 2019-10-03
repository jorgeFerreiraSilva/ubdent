import React from 'react';
import { Container, Progress } from 'mdbreact';

const Loading = () => {
    return (
      <Container style={{marginTop:'25%'}}>
        <Progress material preloader color="indigo dark" />
      </Container>
    )
}

export default Loading
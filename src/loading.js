import React from 'react';
import { Container, Progress } from 'mdbreact';

const Loading = () => {
    return (
      <Container>
        <Progress material preloader color="indigo dark" />
      </Container>
    )
}

export default Loading
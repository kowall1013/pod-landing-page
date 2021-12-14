import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import PodcastPage from './components/PodcastPage';

const Wrapper = styled.div`
  min-height: 200%;
`;


function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <PodcastPage />
    </Wrapper>
  );
}

export default App;

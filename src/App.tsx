import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { COLORS } from './constants';
import PodcastPage from './components/PodcastPage';

const Wrapper = styled.div`
  background-color: ${COLORS.primary.navy};
  height: 100%;
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

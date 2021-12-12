import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';
import SocialIcons from './SocialIcons';
import { Title, Description, InputEmail, RequestButton } from './Styled';

const SectionWrapper = styled.section`
  display: grid;
  justify-content: center;
  padding: 62px 24px 94px;
  position: relative;
  height: 100%;
  background-image: url(./assets/mobile/image-host.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${COLORS.primary.navy};
    opacity: 0.9;
  }
`;

const ContentWrapper = styled.article`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  margin-bottom:57px;
`;

const Form = styled.form`
  margin-top: 48px;
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function PodcastPage(): JSX.Element {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Logo>
          <img src="./assets/desktop/logo.svg" alt="" />
        </Logo>
        <Title>
          Publish your podcasts <span>everywhere.</span>
        </Title>
        <Description>
          Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
        </Description>
        <SocialIcons />
        <Form>
          <InputEmail type="email" placeholder='Email address' />
          <RequestButton type="button" value="Request Access" />
        </Form>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default PodcastPage;

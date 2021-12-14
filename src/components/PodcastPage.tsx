import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import SocialIcons from './SocialIcons';
import { Title, Description, InputEmail, RequestButton } from './Styled';

const SectionWrapperMobile = styled.section`
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
  
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const ContentWrapper = styled.article`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  @media ${QUERIES.tabletAndUp} {
    max-width: 660px;
    background-color: ${COLORS.primary.navy};
    align-self: flex-end;
    grid-column: 1 / 3;
    grid-row: 2 / -1;
    padding: 64px 32px 0px;
  }
`;

const Logo = styled.div`
  margin-bottom:57px;
`;

const Form = styled.form`
  position: relative;
  margin-top: 48px;
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    width: 70%;
    flex-direction: row;
    margin-right: auto;
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

const SectionWrapperDesktop = styled.section`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 130px 1fr;
    padding-bottom: 200px;
    background-color: ${COLORS.primary.navy};
   

    &::after {
      content: url("./assets/desktop/bg-pattern-dots.svg");
      position: absolute;
      left: 0;
      bottom: 0;
    };
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 130px 0 130px 165px;

    &::after {
      right: 0;
      left: auto;
      bottom: 60px;
    }
  }
`;

const ImageWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;

  img {
    margin-left: auto;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const ImageDesktopWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  display: none;

  img {
    margin-left: auto;
  }

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const EmailError = styled.span`
  color: hsla(0, 96%, 61%, 1);
  font-size: 0.75rem;
  position: absolute;
  bottom: -22px;
  left: 32px;
`;

function PodcastPage(): JSX.Element {

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setEmailIsValid(regex.test(emailValue));
  }, [emailValue])

  return (
    <>
      <SectionWrapperMobile>
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
      </SectionWrapperMobile>
      <SectionWrapperDesktop>
        <Logo>
          <img src="./assets/desktop/logo.svg" alt="" />
        </Logo>
        <ImageWrapper>
          <img src='./assets/tablet/image-host.jpg' alt="Man singng or making podcast in front of microphone" />
        </ImageWrapper>
        <ImageDesktopWrapper>
          <img src='./assets/desktop/image-host.jpg' alt="Man singng or making podcast in front of microphone" />
        </ImageDesktopWrapper>
        <ContentWrapper>
          <Title>
            Publish your podcasts <span>everywhere.</span>
          </Title>
          <Description>
            Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
          </Description>
          <Form>
            <InputEmail type="email" placeholder='Email address' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
            <RequestButton type="button" value="Request Access" />
            {!emailIsValid ? null : <EmailError>Oops! Please check your email</EmailError>};
          </Form>
          <SocialIcons />
        </ContentWrapper>
      </SectionWrapperDesktop>
    </>

  )
}

export default PodcastPage;

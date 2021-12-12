import styled from 'styled-components';

const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 16px;
  width: 100%;
`;

function SocialIcons() {
  return (
    <SocialIconsWrapper>
      <img src="assets/desktop/spotify.svg" alt="spotify logo" />
      <img src="assets/desktop/apple-podcast.svg" alt="apple podcast" />
      <img src="assets/desktop/google-podcasts.svg" alt="google podcasts" />
      <img src="assets/desktop/pocket-casts.svg" alt="pocket casts" />
    </SocialIconsWrapper>
  )
}

export default SocialIcons;

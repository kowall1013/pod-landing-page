import styled from 'styled-components';

const Email = styled.span`
  font-size: 0.75rem;
  position: absolute;
  bottom: -22px;
  left: 32px;
`;

const EmailSuccess = styled(Email)`
  color: 	hsl(120, 100%, 40%)
`;

const EmailError = styled(Email)`
  color: hsla(0, 96%, 61%, 1);
`;

type MessageEmialDisplayProps = {
  isEmailValid: boolean;
}

function MessageEmialDisplay({ isEmailValid }: MessageEmialDisplayProps): JSX.Element {
  return (
    isEmailValid ? <EmailSuccess>Email has been send!</EmailSuccess> : <EmailError>Oops! Please check your email</EmailError>
  )
}

export default MessageEmialDisplay;

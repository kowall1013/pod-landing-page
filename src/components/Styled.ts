import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

export const Title = styled.h1`
  font-size: 1.6275rem;
  text-transform: uppercase;
  color: ${COLORS.primary.green};
  line-height: 38px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 16px;

  span {
    color: ${COLORS.primary.white};
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: 3rem;
    text-align: left;
    line-height: 56px;
    margin-bottom: 32px;
  }
`;

export const Description = styled.p`
  font-size: 0.9375rem;
  text-align: center;
  color: ${COLORS.neutral.veryLightGray};
  line-height: 25px;
  margin-bottom: 32px;
  max-width: 445px;
  
  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    line-height: 28px;
    text-align: left;
    margin-right: auto;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px 32px;
  border-radius: 28px;
  font-size: 0.875rem;
`;

export const InputEmail = styled(Input)`
  background-color: ${COLORS.primary.gray};
  color: ${COLORS.primary.white};

  @media ${QUERIES.tabletAndUp} {
    padding: 16px 32px;
    width: 100%;
  }
`;

export const RequestButton = styled(Input)`
  background-color: ${COLORS.primary.green};
  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    background-color: ${COLORS.neutral.veryLightGray};
  }

  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    padding: 12px 32px;
  }
`;

import styled from 'styled-components';
import { COLORS } from '../constants';

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
`;

export const Description = styled.p`
  font-size: 0.9375rem;
  text-align: center;
  color: ${COLORS.neutral.veryLightGray};
  line-height: 25px;
`;

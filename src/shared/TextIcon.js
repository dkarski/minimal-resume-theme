import styled from 'styled-components';
import { Icon } from './Icon';
import { BodyText } from './Typography';

export const TextIcon = styled(BodyText)`
  position: relative;
  padding-left: 21px;

  ${Icon} {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

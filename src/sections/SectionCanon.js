import styled from 'styled-components';
import { Canon } from '../shared/Typography';
import { Theme } from '../shared/theme';

const SectionCanon = styled(Canon)`
  padding-bottom: 7px;
  margin-bottom: 21px;
  border-bottom: 1px solid ${Theme.colors.mainLight};
`;

export default SectionCanon;

import { generateMedia } from 'styled-media-query';
import * as Theme from './theme';

export default generateMedia({
  mobile: Theme.breakpoints[0],
  tablet: Theme.breakpoints[1],
  desktop: Theme.breakpoints[2],
  wideDesktop: Theme.breakpoints[3],
});

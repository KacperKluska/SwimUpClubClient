import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { translate } from '../../translations/src';
import {
  StyledPaper,
  StyledCopyright,
  StyledColumn,
  StyledColumnHeader,
  StyledData,
  StyledSocialMedia,
} from './AppFooter.styles';

export const AppFooter = () => (
  <StyledPaper elevation={0} sx={{ width: '100%', height: '300px' }}>
    <StyledData>
      <StyledColumn>
        <StyledColumnHeader>{translate('footer.contact')}</StyledColumnHeader>
        <span>Kacper Kluska</span>
        <span>222468@edu.lodz.pl</span>
        <span>Lodz Technical University</span>
      </StyledColumn>
      <StyledColumn>
        <StyledColumnHeader>
          {translate('footer.socialMedia')}
        </StyledColumnHeader>
        <StyledSocialMedia>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </StyledSocialMedia>
      </StyledColumn>
    </StyledData>
    <StyledCopyright>&copy;Copyright Kacper Kluska 222468</StyledCopyright>
  </StyledPaper>
);

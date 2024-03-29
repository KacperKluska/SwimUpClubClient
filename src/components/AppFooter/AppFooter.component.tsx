import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from '@mui/material/styles';
import {
  StyledPaper,
  StyledCopyright,
  StyledColumn,
  StyledColumnHeader,
  StyledData,
  StyledSocialMedia,
} from './AppFooter.styles';
import { useTranslations } from '../../translations/src';

export const AppFooter = () => {
  const translate = useTranslations();
  const theme = useTheme();

  return (
    <StyledPaper
      style={{
        backgroundColor: `${
          theme.palette.mode === 'dark' ? 'black' : '#121212'
        }`,
        color: 'white',
      }}
    >
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
};

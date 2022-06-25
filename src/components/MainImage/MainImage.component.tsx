import { useServerImage } from '../../hooks/useImage';
import { useTranslations } from '../../translations/src';
import {
  StyledImage,
  StyledLayout,
  StyledTitle,
  StyledJoin,
} from './MainImage.styles';

export const MainImage = () => {
  const translate = useTranslations();
  const img = useServerImage(
    '1645473667433_pexels-guduru-ajay-bhargav-863988.jpg',
  );

  if (!img) return null;

  return (
    <StyledLayout>
      <StyledImage src={img} alt="main page image" />
      <StyledTitle>{translate('homePage.mainTitle')}</StyledTitle>
      <StyledJoin>{translate('homePage.joinTitle')}</StyledJoin>
    </StyledLayout>
  );
};

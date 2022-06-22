import { useServerImage } from '../../hooks/useImage';
// import { useTranslations } from '../../translations/src';
import { StyledImage } from './MainImage.styles';

export const MainImage = () => {
  const img = useServerImage(
    '1645473667433_pexels-guduru-ajay-bhargav-863988.jpg',
  );
  // const translate = useTranslations();

  return <StyledImage src={img} alt="main page image" />;
};

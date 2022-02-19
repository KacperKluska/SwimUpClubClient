import { MenuCardItem } from '../../pages/MainMenuPage/MainMenuPage.component';
import { translate } from '../../translations/src';
import { CustomLink } from '../CustomLink/CustomLink.component';
import { StyledPaper, StyledCard } from './MainMenu.styles';

interface MainMenuProps {
  items: MenuCardItem[];
}

export const MainMenu = ({ items }: MainMenuProps) => (
  <StyledPaper>
    {items.map((item) => (
      <CustomLink path={item.path}>
        <StyledCard elevation={4}>
          {translate(`mainMenu.cards.${item.name}`)}
        </StyledCard>
      </CustomLink>
    ))}
  </StyledPaper>
);

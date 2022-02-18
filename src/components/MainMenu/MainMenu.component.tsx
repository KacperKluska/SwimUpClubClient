import { MenuCardItem } from '../../pages/MainMenuPage/MainMenuPage.component';
import { translate } from '../../translations/src';
import { StyledLink } from '../CustomLink/CustomLink.styles';
import { StyledPaper, StyledCard } from './MainMenu.styles';

interface MainMenuProps {
  items: MenuCardItem[];
}

export const MainMenu = ({ items }: MainMenuProps) => (
  <StyledPaper>
    {items.map((item) => (
      <StyledLink to={item.path}>
        <StyledCard elevation={4}>
          {translate(`mainMenu.cards.${item.name}`)}
        </StyledCard>
      </StyledLink>
    ))}
  </StyledPaper>
);

import { translate } from '../../translations/src';
import { StyledPaper, StyledCard } from './MainMenu.styles';

interface MainMenuProps {
  items: string[];
}

export const MainMenu = ({ items }: MainMenuProps) => (
  <StyledPaper>
    {items.map((item) => (
      <StyledCard elevation={4}>
        {translate(`mainMenu.cards.${item}`)}
      </StyledCard>
    ))}
  </StyledPaper>
);

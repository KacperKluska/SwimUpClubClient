import { StyledPaper } from './CenteredPaper.styles';

interface CenteredPaperProps {
  children: React.ReactNode;
}

export const CenteredPaper = ({ children }: CenteredPaperProps) => (
  <StyledPaper>{children}</StyledPaper>
);

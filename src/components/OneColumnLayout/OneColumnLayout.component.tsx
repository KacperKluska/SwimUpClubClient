import { StyledOneColumnLayout } from './OneColumnLayout.styles';

interface Props {
  children: React.ReactNode;
}

export const OneColumnLayout = ({ children }: Props) => (
  <StyledOneColumnLayout>{children}</StyledOneColumnLayout>
);

import { StyledLink } from './CustomLink.styles';

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
}

export const CustomLink = ({ path, children }: CustomLinkProps) => (
  <StyledLink to={path}>{children}</StyledLink>
);

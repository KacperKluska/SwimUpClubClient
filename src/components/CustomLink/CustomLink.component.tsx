import { StyledLink } from './CustomLink.styles';

interface CustomLinkProps {
  path: string;
}

export const CustomLink = ({ path }: CustomLinkProps) => (
  <StyledLink to={path} />
);

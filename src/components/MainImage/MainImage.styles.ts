import styled from 'styled-components';

export const StyledLayout = styled.section`
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 70%;
  max-height: 600px;
  object-fit: cover;

  vertical-align: middle;

  @media (max-width: 1500px) {
    object-position: top;
  }

  @media (max-width: 768px) {
    max-height: 250px;
    object-position: 50% 20%;
  }
`;

export const StyledTitle = styled.h1`
  color: white;
  position: absolute;
  top: 1rem;
  left: 1rem;

  font-size: 4rem;
  font-weight: 600;
  text-shadow: 0 0 10px black;

  max-width: 900px;
  height: auto;

  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: 300px;
  }
`;

export const StyledJoin = styled.h1`
  color: white;
  position: absolute;
  bottom: 1rem;
  left: 1rem;

  font-size: 6rem;
  font-weight: bold;
  text-shadow: 0 0 10px black;

  max-width: 900px;
  height: auto;

  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    max-width: 300px;
  }
`;

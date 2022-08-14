import styled, { css } from 'styled-components';

const row = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledWorkoutSession = styled.article`
  ${row}
  justify-content: space-between;
  padding: 1rem;
  padding-left: 0;
  max-width: 800px;
  min-width: 400px;
`;

export const StyledButtons = styled.section`
  height: 100%;
  justify-content: center;
  ${row}

  @media (max-width: 1064px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

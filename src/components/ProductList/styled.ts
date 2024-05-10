import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 22px;
  row-gap: 31px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    overflow-y: scroll;
    padding: 20px 0;
  }
`;

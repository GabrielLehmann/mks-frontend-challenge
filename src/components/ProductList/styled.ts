import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 22px;
  row-gap: 31px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

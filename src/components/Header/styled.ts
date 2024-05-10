import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 101px;

  background: #0f52ba;

  @media (max-width: 768px) {
    height: 48px;
  }
`;

export const TitleContainer = styled.div`
  margin-left: 65px;
  display: flex;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;
export const HeaderSubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

import styled from "styled-components";

export const CartQuantityContainer = styled.button`
  display: flex;
  gap: 16px;
  margin-right: 88px;
  padding: 14px 27px 13px 15px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: #ffffff;

  font-size: 18px;
  font-weight: 700;

  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 10px;
    margin-right: 23px;
    padding: 8px 15px 7px 9px;
  }
`;

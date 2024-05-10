import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 218px;
  height: 285px;
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 18px 11px 12px 14px;
`;

export const Photo = styled(Image)`
  object-fit: contain;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  width: 111px;
  height: 50%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  min-height: 38px;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const ProductPrice = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  background: #373737;
  padding: 4px 6px 4px 7px;

  height: fit-content;
  border-radius: 5px;
`;

export const ProductDescription = styled.h3`
  font-size: 10px;
  font-weight: 300;
  text-align: left;
  min-height: 52px;
  color: #2c2c2c;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 31.91px;
  background: #0f52ba;
  border: none;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  justify-self: flex-end;

  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

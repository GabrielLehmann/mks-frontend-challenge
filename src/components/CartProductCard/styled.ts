import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 95px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 0 19px 20px;

  border-radius: 8px;
  box-shadow: -2px 2px 10px 0px #0000000d;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border: none;
  border-radius: 50%;
  height: 18px;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  width: 80px;
`;

export const Photo = styled(Image)`
  width: auto;
`;

export const ProductTitle = styled.h2`
  width: 113px;
  font-size: 13px;
  font-weight: 400;

  text-align: left;

  color: #2c2c2c;
`;

export const AddButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 19px;

  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
`;

export const Qtd = styled.p`
  position: absolute;
  top: -10px;
  font-size: 5px;
  font-weight: 400;
`;

export const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ffffff;
  vertical-align: bottom;
  width: 17px;
`;

export const Quantity = styled.p`
  font-size: 8px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 0.2px solid #bfbfbf;
  border-right: 0.2px solid #bfbfbf;
  width: 14px;
`;

export const MinusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ffffff;
  vertical-align: bottom;
  width: 17px;
`;

export const ProductPrice = styled.h2`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  color: #000000;
  padding-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

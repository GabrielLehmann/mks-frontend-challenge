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

  @media (max-width: 768px) {
    height: 220px;
    width: 250px;
    justify-content: center;
    align-items: center;
    padding: 22px 23px 22px 16px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  background-color: #ffffff;

  @media (max-width: 768px) {
    top: 18px;
    right: 20px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 55px;
  height: 65px;

  @media (max-width: 768px) {
    width: 90px;
    height: 100px;
  }
`;

export const Photo = styled(Image)`
  object-fit: cover;
  width: auto;
`;

export const ProductTitle = styled.h2`
  width: 113px;
  font-size: 13px;
  font-weight: 400;

  text-align: left;

  color: #2c2c2c;

  @media (max-width: 768px) {
    width: fit-content;
    font-size: 16px;
    margin-bottom: 11px;
  }
`;

export const AddButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 19px;

  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 700;
    text-align: left;

    height: 34px;
    padding: 4px 6px 4px 7px;
    border-radius: 5px;
  }
`;

export const Qtd = styled.p`
  position: absolute;
  top: -10px;
  font-size: 5px;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ffffff;
  vertical-align: bottom;
  width: 17px;

  @media (max-width: 768px) {
    width: 28px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
    width: 24px;
    height: 20px;
  }
`;

export const MinusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ffffff;
  vertical-align: bottom;
  width: 17px;

  @media (max-width: 768px) {
    width: 28px;
  }
`;

export const ProductPrice = styled.h2`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    color: #ffffff;
    background: #373737;
    padding: 4px 6px 4px 7px;

    width: 84px;
    height: 34.81px;
    border-radius: 5px;
  }
`;

export const MobilePrice = styled.div`
  display: flex;
  gap: 30px;
`;

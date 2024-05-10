import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  width: 486px;
  z-index: 10;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleExit = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 36px 22px 22px 47px;
`;

export const Title = styled.p`
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
`;

export const Exit = styled.button`
  border: none;
  border-radius: 50%;
  height: 38px;
  cursor: pointer;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  overflow-y: scroll;

  width: 100%;
  padding: 10px 60px 0 47px;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    box-shadow: inset 5px 0px 6px 0px #00000021;
  }

  &::-webkit-scrollbar-thumb {
    background: #0a359c;
    border-radius: 4px;
  }
`;

export const FinishPrice = styled.div`
  width: 100%;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  padding: 22px 60px 42px 47px;
`;

export const Total = styled.div``;

export const Price = styled.div``;

export const Finish = styled.a`
  font-size: 28px;
  font-weight: 700;

  width: 100%;
  height: 97px;
  border: none;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;

  color: #ffffff;
  background-color: #000000;
`;

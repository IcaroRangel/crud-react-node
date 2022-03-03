import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  background: #ea1d2c;
  width: 20%;
  height: 48px;
  border-radius: 8px;
  @media (max-width: 768px) {
    & {
      height: 35px !important;
      font-size: 12px;
    }
  }
  @media (max-width: 400px) {
    & {
      font-size: 9px;
    }
  }
`;

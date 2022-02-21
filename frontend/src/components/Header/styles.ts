import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;
  font-weight: 600;
  width: 85vw;
`;

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
  svg {
    width: 35px;
    height: 35px;
  }
  a {
    text-decoration: none;
    color: #000;
    justify-content: center;
  }
  div {
    height: 35px;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  div:after {
    content: "";
    height: 20px;
    border-right: 1px solid #cccccc;
  }
`;

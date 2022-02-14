import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: flex-start;
  background: #ff4040;
`;

export const ContainerNav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  svg {
    width: 35px;
    height: 35px;
    margin-left: 15px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

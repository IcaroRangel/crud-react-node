import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 50px 0px 50px;
  div {
    display: flex;
    flex-flow: row wrap;
  }
  span {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span.column-10 {
    width: 10%;
  }
  span.column-20 {
    width: 20%;
  }
`;

export const ContainerUl = styled.ul`
  li {
    display: flex;
    flex-flow: row wrap;
  }
  span {
    display: flex;
    gap: 20px;
    height: 30px;
  }
  a {
    text-decoration: none;
  }
`;

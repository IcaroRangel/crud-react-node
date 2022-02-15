import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 40px;
  border: 1px solid #363636;
  background: #d3d3d3;

  span {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 15px;
    width: 300px;
    svg {
      width: 25px;
      height: 25px;
    }
    p {
      padding-top: 2px;
    }
  }
  div {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    a {
      width: 28px;
      border-radius: 4px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      svg {
        width: 20px;
        height: 30px;
      }
    }
  }
`;

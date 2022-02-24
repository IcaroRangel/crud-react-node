import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  bottom: 0;
  position: fixed;
  height: 40px;
  width: 85vw;
  border-top: 1px solid #cccccc;
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
      width: 200px;
      height: 10px;
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

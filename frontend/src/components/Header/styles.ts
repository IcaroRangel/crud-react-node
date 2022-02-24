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
  .menu-mobile {
    cursor: pointer;
    position: absolute;
    display: none;
    right: 20%;
    left: 80%;
  }
  .menu {
    width: 24px;
    height: 2px;
    background: #ea1d2c;
    margin: 4px;
  }
  @media (max-width: 768px) {
    ul {
      position: absolute;
      top: 8vh;
      right: 0;
      width: 25% !important;
      height: 488px;
      margin-top: 13px;
      background: #ea1d2c;
      border-radius: 12px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;
    }
    li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      a {
        font-size: 12px;

        div {
          width: 160px;
          display: flex;
          align-items: center !important;
          justify-content: center !important;
          font-size: 12px;
          margin-left: 40px;
        }
      }
      div {
        &:after {
          display: none;
        }
      }
    }
    .menu-mobile {
      display: block;
    }
  }
  @media (max-width: 460px) {
    li {
      a {
        font-size: 8px;
        div {
          width: 10px;
          font-size: 8px;
        }
      }
    }
  }
  ul.active {
    transform: translateX(0);
  }
  display: flex;
  align-items: center;
  gap: 60px;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    padding: 0;
    margin-bottom: 0;
  }
  li {
    display: flex;
    align-items: center;
  }
  svg {
    width: 35px;
    height: 35px;
  }
  a {
    display: flex;
    text-decoration: none;
    color: #000;
    div {
      height: 35px;
      display: flex;
      align-items: center;
      gap: 40px;
      margin-right: 40px;
      &:after {
        content: "";
        height: 20px;
        border-right: 1px solid #cccccc;
      }
    }
  }
`;

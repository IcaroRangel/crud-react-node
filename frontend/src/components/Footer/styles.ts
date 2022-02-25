import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  bottom: 0;
  position: fixed;
  height: 40px;
  width: 85vw;
  border-top: 1px solid #cccccc;
  @media (max-width: 768px) {
    footer {
      width: 100%;
    }
    .social {
      font-size: 12px;
    }
    svg {
      width: 18px !important;
      height: 18px !important;
    }
    span {
      gap: 0 !important;
    }
    p {
      margin-left: 4px;
      padding-top: 5px !important;
      width: 140px !important;
      font-size: 11px;
    }
    a {
      background: red;
      width: 18px !important;
      height: 18px !important;
      margin-right: 5px !important;
    }
  }
  @media (max-width: 380px) {
    .social {
      display: none !important;
    }
  }
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
  .social {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    a {
      background: red;
      width: 28px;
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

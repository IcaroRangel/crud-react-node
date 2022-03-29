import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 22px;
    margin-top: 8px;
    margin-bottom: 18px;
  }
  input {
    border: none;
    width: 40%;
    height: 48px;
    font-weight: 100;
    background: #f2f2f2;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    outline: 0;
    margin: 5px 0px 25px 0px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 16px !important;
      width: 75%;
    }
    input {
      height: 30px !important;
      font-size: 12px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 12px !important;
      width: 75%;
    }
    input {
      height: 30px !important;
      font-size: 10px;
    }
  }
`;

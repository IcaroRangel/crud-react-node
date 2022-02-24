import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 1023px) {
    div {
      margin: 0;
    }
    .phrase {
      width: 100vw !important;
      height: 488px !important;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
    .image {
      display: none;
    }
  }
  @media (max-width: 664px) {
    .phrase {
      height: 473px !important;
      h1 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  div.image {
    width: 60%;
    height: 488px;
    img {
      width: 624px;
      height: 100%;
    }
  }
  div.phrase {
    width: 40%;
  }
  h1 {
    text-align: center;
    height: 40px;
    font-size: 36px;
    margin-top: 100px;
  }
  p {
    margin-top: 30px;
    text-align: center;
    font-size: 18px;
  }
`;

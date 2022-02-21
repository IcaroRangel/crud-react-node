import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  div.column-60 {
    width: 60%;
    height: 488px;
    img {
      width: 624px;
      height: 100%;
    }
  }
  div.column-40 {
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

// border: 1px outset #ff4040;
//box-shadow: 4px 0px 10px 4px #ff4040;

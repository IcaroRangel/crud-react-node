import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  width: 85vw;
  height: 426px;
  overflow-y: scroll;
  div {
    display: flex;
    flex-flow: row wrap;
    background: #f2f2f2;
    span {
      border: 1px solid #cccccc;
      height: 25px;
      &:first-child {
        border-top-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
      }
    }
  }
  span {
    border-bottom: 1px solid #cccccc;
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
    &:first-child {
      border-top: 1px solid #cccccc;
    }
    &:last-child {
      span:last-child {
        border-bottom-right-radius: 6px;
      }
      span:first-child {
        border-bottom-left-radius: 6px;
      }
    }
    &:nth-child(even) {
      background: #f2f2f2;
    }
    &:nth-child(odd) {
      background: #c7edff;
    }
  }
  span {
    display: flex;
    gap: 20px;
    height: 40px;
    &:first-child {
      border-left: 1px solid #cccccc;
    }
    &:last-child {
      border-right: 1px solid #cccccc;
    }
  }

  a {
    text-decoration: none;
  }
`;

import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  width: 85vw;
  height: 426px;
  overflow-y: scroll;
  @media (max-width: 930px) {
    & {
      width: 75%;
    }
    ul {
      border: none;
      height: 100%;
      li {
        margin-bottom: 10px;
        border: 1px solid #dad6eb;
        display: block;
        span {
          display: flex;
          justify-content: flex-start;
          padding-right: 6px;
          width: 100% !important;
          border-bottom: 0;
          &::before {
            content: attr(data-title);
            width: 100%;
            display: flex;
            padding-left: 6px;
            align-items: center;
          }
          svg {
            width: 6vw;
            height: 6vh;
          }
        }
      }
    }
    div {
      span {
        display: none;
      }
    }
  }
  @media (max-width: 572px) {
    span {
      font-size: 12px;
    }
    li {
      width: 170%;
    }
  }
  div {
    display: flex;
    flex-flow: row wrap;
    background: #fff;
    span {
      border: 1px solid ${shade(0.1, "#fff")};
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
    border-bottom: 1px solid ${shade(0.1, "#fff")};
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
  padding-left: 0px;
  li {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    &:first-child {
      border-top: 1px solid ${shade(0.1, "#fff")};
    }
    &:last-child {
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
      span:last-child {
        border-bottom-right-radius: 6px;
      }
      span:first-child {
        border-bottom-left-radius: 6px;
      }
    }
    &:nth-child(even) {
      background: #fff;
    }
    &:nth-child(odd) {
      background: ${shade(0.1, "#fff")};
    }
  }
  span {
    display: flex;
    gap: 20px;
    height: 40px;
    &:first-child {
      border-left: 1px solid ${shade(0.1, "#fff")};
    }
    &:last-child {
      border-right: 1px solid ${shade(0.1, "#fff")};
    }
  }

  a {
    text-decoration: none;
  }
`;

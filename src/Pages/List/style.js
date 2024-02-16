import styled from "styled-components";
import background from "../../assets/background.svg";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;

  width: 100%;
  height: 100vh;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  > li {
    max-width: 57rem;
    background-color: #ffffff 50%;

    padding: 1.6rem 2.4rem;
    text-align: center;

    border: 1px solid #ccc;
    cursor: pointer;
  }
  > li a {
    color: #fff;
    width: 100%;
  }
`;
export const Content = styled.main`
  width: 100%;

  padding-top: 10rem;

  display: flex;
  justify-content: center;
`;

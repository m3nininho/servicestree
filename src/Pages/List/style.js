import styled from "styled-components";

export const Container = styled.main`
  max-width: 120rem;
  margin: auto;
  height: 100%;
  padding: 2rem;
`;

export const List = styled.ul`
margin: 4.5rem 0 2rem 0;

display: flex;
flex-direction: column;
gap: 2rem;

overflow: scroll;
padding: 2rem;

height: 80rem;

> li {
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.10);

  width: 35rem;
  padding: 1.6rem 2.4rem;
  color: #fff;
  text-align: center;
  
}
> li a{
  color: #fff;
  

  transition: color 0.3s ease;
}
> li a:hover{
  color: #808080; 
}
`
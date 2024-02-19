import styled from "styled-components";
import Modal from "styled-react-modal";

export const Container = styled.main`
  max-width: 120rem;
  margin: auto;
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  >button{
    background-color: #555555;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 0.7rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 1.4rem;
  
  width: 80%;
  max-width: 40rem;
  }
  > button:hover{
  background-color: #999;
}
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
    background: rgba(255, 255, 255, 0.1);

    width: 35rem;
    padding: 1.6rem 2.4rem;
    color: #fff;
    text-align: center;
  }
  > li a {
    color: #fff;

    transition: color 0.3s ease;
  }
  > li a:hover {
    color: #808080;
  }
`;

export const StyledModal = Modal.styled`

position: relative;
  width: 80%;
  max-width: 80rem;
  padding: 2rem;
  text-align: center;
  background-color: #3c3c3c;
  border-radius: 2rem;
> form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  margin-top: 4rem;
}
> form label{
  font-size: 1.7rem;
  color: #cecece;
  cursor: pointer;
}
> form input{
  border: none;
  border-radius: .7rem;
  padding: .8rem;
  width: 80%;
  max-width: 30rem;
}
> form button{
  padding: 1.3rem;
  width: 80%;
  margin-top: 2rem;
  max-width: 30rem;
  cursor: pointer;
  color: #fff;
  font-size: 1.6rem;
  background-color: #555;
  transition: background-color 0.3s ease;
  border: none;
}
>form button:hover{
  background-color: #999;
  color: #efefef;
}
> button{
  
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #555555;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 0.7rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 1.4rem;
}
> button:hover{
  background-color: #999;
}
`;
export const SuccessOrError = styled.div`
margin-top: 2rem;
padding-bottom: 1rem;
color: green;
font-weight: bold;
letter-spacing: .15rem;
`
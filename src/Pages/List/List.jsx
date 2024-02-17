import { useState, useEffect } from "react";
import { addServices, getServices } from "../../services/api";
import { Container, List, StyledModal } from "./style";

function App() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    getServices().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <List>
          {data.map((itens) => {
            return (
              <>
                <li>
                  <a href={itens.url} target="_blank">
                    {itens.name}
                  </a>
                </li>
              </>
            );
          })}
        </List>
        <button onClick={toggleModal}>Registrar link</button>

        <StyledModal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          contentLabel="Test"
        >
          <form >
            <label htmlFor="titleLink">Insira o título do link</label>
            <input type="text" id="titleLink" />

            <label htmlFor="urlLink">Insira a URL do link</label>
            <input type="text" id="urlLink" />

            <button type="submit">Cadastrar Link</button>
          </form>
          <button onClick={toggleModal}>Fechar modal</button>
        </StyledModal>
      </Container>
    </>
  );
}

export default App;

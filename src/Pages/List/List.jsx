import { useState, useEffect } from "react";
import { addServices, deleteService, getServices } from "../../services/api";
import { Container, List, StyledModal, SuccessOrError } from "./style";
import x from "../../assets/x.svg";

function App() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setdescription] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

  function toggleModal(e) {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    getServices().then((response) => {
      setData(response.data);
    });
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name == "" || url == "" || description == "") {
        alert("Está faltando preencher algum campo");
      } else {
        const newData = await addServices(name, url, description);

        if (newData) {
          setData([...data, newData]);
          setName("");
          setUrl("");
          setdescription("");
          setMessage("Link criado com sucesso");
        } else {
          setMessage("Ocorreu algum erro");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
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
                  <button
                    onClick={() => {
                      setId(itens.id);
                      deleteService(id);
                    }}
                  >
                    <img src={x} alt="" />
                  </button>
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="titleLink">Insira o título do link</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="urlLink">Insira a URL do link</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <label htmlFor="urlLink">Insira a descrição do link</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />

            <button type="submit">Cadastrar Link</button>

            <SuccessOrError>{message ? <p>{message}</p> : null}</SuccessOrError>
          </form>
          <button onClick={toggleModal}>Fechar modal</button>
        </StyledModal>
      </Container>
    </>
  );
}

export default App;

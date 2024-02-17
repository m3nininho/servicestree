import { useState, useEffect } from "react";
import { addServices, getServices } from "../../services/api";
import { Container, List } from "./style";

function App() {
  const [data, setData] = useState([]);

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
        <button onClick={addServices()}>Registrar link</button>
      </Container>
    </>
  );
}

export default App;

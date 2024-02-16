import { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, List, Content } from "./style";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Content>
          <List>
            {data.map((itens) => {
              return (
                <>
                  <li><a href={itens.url} target="_blank">{itens.name}</a></li>
                </>
              );
            })}
          </List>
        </Content>
      </Container>
    </>
  );
}

export default App;

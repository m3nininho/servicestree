import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
}
:root{
    font-size: 62.5%;
}
body{
    font-size: 1.6rem;
    background-color: #333333;
   width: 100%;
   height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
`;

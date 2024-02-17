import axios from "axios";

export const getServices = () => {
  return axios.get("http://127.0.0.1:8000/services").then((response) => {
    return response;
  });
};

export const addServices = () => {
  const data = {
    name: "Luiz",
    url: "https://youtube.com",
    description:"tttt"
  }
   
  axios.post("http://127.0.0.1:8000/services", data).then((response) => {
   console.log(response.data)
  })
  
};

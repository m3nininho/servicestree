import axios from "axios";

export const getServices = () => {
  return axios.get("http://127.0.0.1:8000/services").then((response) => {
    return response;
  });
};

export const addServices = () => {
  const data = {
    name: "testing",
    url: "https://youtube.com"
  }
   
  axios.post("http://127.0.0.1:8000/services", data).then((response) => {
   console.log(response.data)
  })
  
};

import axios from "axios";

export const getServices = () => {
  return axios.get("http://127.0.0.1:8000/services").then((response) => {
    return response;
  });
};

export const addServices = async (name, url, description) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/services", {
      name: name,
      url: url,
      description: description,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

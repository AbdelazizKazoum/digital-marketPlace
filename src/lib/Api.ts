import axios from "axios";

const apiKey = process.env.API_TOKEN_KEY;
const apiURL = "http://localhost:1337/api/";

const Api = axios.create({
  baseURL: apiURL,

  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default Api;
